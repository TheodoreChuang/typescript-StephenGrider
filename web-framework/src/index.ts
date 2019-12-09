import axios from 'axios'
import { User } from './models/User'

export const rootUrl = 'http://localhost:3000'

const sleep = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const jc = new User({ name: 'John Citizen', age: 99 })

console.log(jc)
console.log(jc.get('name'))

jc.on('changed', () => console.log('change 1'))
jc.on('changed', () => console.log('change 2'))

jc.trigger('changed')

sleep(1000).then(() => {
  axios.post(`${rootUrl}/users`, { id: 84739533 }).then(res => console.log(res))
})

sleep(2000).then(() => {
  axios.get(`${rootUrl}/users/84739533`).then(res => console.log(res))
})
