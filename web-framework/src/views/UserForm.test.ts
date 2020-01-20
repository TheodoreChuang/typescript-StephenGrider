import { User } from '../models/User'
import { UserForm } from './UserForm'

const name = 'Haruka Shimizu'
const age = 33
const userHS = User.buildUser({ name, age, id: 1587 })

const rootElement = document.createElement('template')
rootElement.innerHTML = `
  <html>
    <body>
      <div id="root"></div>
    </body>
  </html>
  `

let userForm: UserForm | undefined = undefined
if (rootElement) {
  userForm = new UserForm(rootElement, userHS)
  userForm.render()
} else {
  throw new Error('Root element not found')
}

describe('<UserForm />', () => {
  test('Root element exists', () => {
    expect(rootElement).toBeTruthy()
  })
  test('It renders', () => {
    expect(userForm).toBeTruthy()
  })
})
