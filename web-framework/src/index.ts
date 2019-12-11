import axios from 'axios'
import { User } from './models/User'

const jc = new User({ name: 'John Citizen', age: 99 })

console.log(jc.get('name'))

jc.events.on('changed', () => console.log('change 1'))
jc.events.on('changed', () => console.log('change 2'))
jc.events.trigger('changed')

export const rootUrl = 'http://localhost:3000'

// const sleep = (milliseconds: number) => {
//   return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

// sleep(1000).then(() => {
//   axios.post(`${rootUrl}/users`, { id: 84739533 }).then(res => console.log(res))
// })

// sleep(2000).then(() => {
//   axios.get(`${rootUrl}/users/84739533`).then(res => console.log(res))
// })
