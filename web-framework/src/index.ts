import { User } from './models/User'

const jc = new User({ name: 'John Citizen', age: 99 })

console.log(jc)
console.log(jc.get('name'))

jc.on('changed', () => console.log('change 1'))
jc.on('changed', () => console.log('change 2'))

jc.trigger('changed')
