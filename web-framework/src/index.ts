// import { User } from './models/User'
import { Collection } from './models/Collection'

export const rootUrl = 'http://localhost:3000'

// const jc = User.buildUser({ name: 'John Citizen', age: 99, id: 1234 })

// jc.on('change', () => console.warn('User Attributes Changed:\n', jc))
// jc.on('save', () => console.warn('User Saved:\n', jc))
// jc.on('error', () => console.error('Error saving user'))

// console.log(jc.get('name'))

// jc.set({ name: 'John Civilian', age: 1 })
// console.log(jc.get('name'))

// jc.on('updated', () => console.log('update 1'))
// jc.on('updated', () => console.log('update 2'))
// jc.trigger('updated')

// jc.fetch()

// jc.save()

const collection = new Collection(`${rootUrl}/users`)

collection.on('change', () => {
  console.log(collection)
})

collection.fetch()
