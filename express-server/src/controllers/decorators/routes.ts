import 'reflect-metadata'
import { RequestHandler } from 'express'
import { HttpMethods } from './HttpMethods'
import { MetadataKeys } from './MetadataKeys'

// Interface restricts this decorator to be only be applied to express RequestHandler
interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler
}

const routeBinder = (method: string) => {
  return (path: string) => {
    return (target: any, key: string, desc: RouteHandlerDescriptor) => {
      // decorators on methods target the prototype
      Reflect.defineMetadata(MetadataKeys.Path, path, target, key)
      Reflect.defineMetadata(MetadataKeys.Method, method, target, key)
    }
  }
}

export const post = routeBinder(HttpMethods.Post)
export const get = routeBinder(HttpMethods.Get)
export const put = routeBinder(HttpMethods.Put)
export const patch = routeBinder(HttpMethods.Patch)
export const del = routeBinder(HttpMethods.Del)
