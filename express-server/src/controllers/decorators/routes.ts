import 'reflect-metadata'
import { HttpMethods } from './HttpMethods'
import { MetadataKeys } from './MetadataKeys'

const routeBinder = (method: string) => {
  return (path: string) => {
    return (target: any, key: string, desc: PropertyDescriptor) => {
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
