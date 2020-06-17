import 'reflect-metadata'
import { RequestHandler } from 'express'
import { MetadataKeys } from './MetadataKeys'

export const use = (middleware: RequestHandler) => {
  return (target: any, key: string, desc: PropertyDescriptor) => {
    const middleswares = Reflect.getMetadata(MetadataKeys.Middleware, target, key) || []

    Reflect.defineMetadata(MetadataKeys.Middleware, [...middleswares, middleware], target, key)
  }
}
