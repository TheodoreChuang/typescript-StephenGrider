import 'reflect-metadata'
import { Request, Response, RequestHandler, NextFunction } from 'express'

import { AppRouter } from '../../AppRouter'
import { HttpMethods } from './HttpMethods'
import { MetadataKeys } from './MetadataKeys'

const bodyValidators = (keys: string): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      res.send(422).send('Invalid Request')
      return
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send('Invalid Request')
        return
      }
    }

    next()
  }
}

export function controller(routePrefix: string) {
  // decorators on class target the constructor function
  return function (target: Function) {
    const router = AppRouter.getInstance()

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(MetadataKeys.Path, target.prototype, key)
      const method: HttpMethods = Reflect.getMetadata(MetadataKeys.Method, target.prototype, key)
      const middlewares = Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) || []
      const requiredBodyProps = Reflect.getMetadata(MetadataKeys.validator, target.prototype, key) || []

      const validator = bodyValidators(requiredBodyProps)

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, validator, routeHandler)
      }
    }
  }
}
