import 'reflect-metadata'
import { AppRouter } from '../../AppRouter'
import { HttpMethods } from './HttpMethods'
import { MetadataKeys } from './MetadataKeys'

export function controller(routePrefix: string) {
  // decorators on class target the constructor
  return function (target: Function) {
    const router = AppRouter.getInstance()

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key]
      const path = Reflect.getMetadata(MetadataKeys.Path, target.prototype, key)
      const method: HttpMethods = Reflect.getMetadata(MetadataKeys.Method, target.prototype, key)
      const middlewares = Reflect.getMetadata(MetadataKeys.Middleware, target.prototype, key) || []

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler)
      }
    }
  }
}
