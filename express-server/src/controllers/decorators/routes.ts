import 'reflect-metadata'

export function get(path: string) {
  return function(target: any, key: string, desc: PropertyDescriptor) {
    // decorators on methods target the prototype
    Reflect.defineMetadata('path', path, target, key)
  }
}