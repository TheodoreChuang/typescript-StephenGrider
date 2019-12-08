import { User } from './User'

describe('Test User model', () => {
  let testUser: any
  beforeEach(() => (testUser = new User({ name: 'John Citizen', age: 99 })))

  test('Creates an new user given expected arguments', () => {
    expect(testUser).toBeInstanceOf(User)
  })
  test('GET a specific attribute of an user', () => {
    expect(testUser.get('name')).toBe('John Citizen')
  })
})
