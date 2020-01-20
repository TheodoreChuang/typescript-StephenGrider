import { User } from './models/User'
import { UserEdit } from './views/UserEdit'

export const rootUrl = 'http://localhost:3000'

/* 
  MODELS 
*/
/* User */

// const userJc = User.buildUser({ name: 'John Citizen', age: 99, id: 1234 })

// userJc.on('change', () => console.warn('User Attributes Changed:\n', userJc))
// userJc.on('save', () => console.warn('User Saved:\n', userJc))
// userJc.on('error', () => console.error('Error saving user'))

// console.log(userJc.get('name'))

// userJc.set({ name: 'John Civilian', age: 1 })
// console.log(userJc.get('name'))

// userJc.on('updated', () => console.log('update 1'))
// userJc.on('updated', () => console.log('update 2'))
// userJc.trigger('updated')

// userJc.fetch()

// userJc.save()

// /* User Collection */

// const userCollection = User.buildUserCollection()

// userCollection.on('change', () => {
//   console.log('ON CHANGE: ', userCollection)
// })

// userCollection.on('updated', () => {
//   console.log('updated')
// })

// userCollection.trigger('updated')

// userCollection.fetch()

// console.log('userCollection.models', userCollection.models)

/* 
  VIEWS 
*/
/* UserEdit */

const userHS = User.buildUser({ name: 'Haruka Shimizu', age: 33, id: 1587 })

const rootElement = document.getElementById('root')

if (rootElement) {
  const userEdit = new UserEdit(rootElement, userHS)
  userEdit.render()
} else {
  throw new Error('Root element not found')
}
