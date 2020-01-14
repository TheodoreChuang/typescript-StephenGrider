import { User } from './User'
import { Collection } from './Collection'

declare global {
  namespace jest {
    interface Matchers<R, T> {
      toBeWithinRange(a: number, b: number): R
    }
  }
}

expect.extend({
  toBeWithinRange(received, floor, ceiling) {
    const pass = received >= floor && received <= ceiling
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true
      }
    } else {
      return {
        message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false
      }
    }
  }
})

describe('Test User model', () => {
  let testUser: User
  beforeEach(() => (testUser = User.buildUser({ name: 'John Citizen', age: 99 })))

  const mockCallbackEvent = jest.fn()

  test('Creates an new user given expected arguments', () => {
    expect(testUser).toBeInstanceOf(User)
  })

  test('GET a specific attribute of an user', () => {
    expect(testUser.get('name')).toBe('John Citizen')
  })

  test('SET all attribute of an user', () => {
    testUser.set({ name: 'Jane', age: 1 })
    expect(testUser.get('name')).toBe('Jane')
  })

  test('SET random age of user', () => {
    testUser.setRandomAge()
    expect(testUser.get('age')).toBeWithinRange(0, 150)
  })

  // test('ON registers an event', () => {
  //   expect(testUser.events).toStrictEqual({})

  //   testUser.on('click', mockCallbackEvent)
  //   testUser.on('click', mockCallbackEvent)
  //   expect(testUser.events.events.click.length).toBe(2)
  // })

  test('TRIGGER does nothing if there are no events', () => {
    const trigged = testUser.trigger('updated')
    expect(trigged).toBeUndefined()
  })
  test('TRIGGER run each of its events for a specific trigger', () => {
    testUser.on('click', mockCallbackEvent)
    testUser.on('updated', mockCallbackEvent)
    testUser.on('updated', mockCallbackEvent)

    testUser.trigger('updated')
    expect(mockCallbackEvent).toHaveBeenCalledTimes(2)
  })

  // test('async stuff', async () => {
  //   expect.assertions(1)
  //   const data = await User.fetch()
  //   expect(data.name).toEqual('Jane')
  // })

  test('Creates a collection of users', () => {
    // const testUser2 = User.buildUser({ name: 'Bob Campbell', age: 32 })
    const userCollection = User.buildUserCollection()

    expect(userCollection).toBeInstanceOf(Collection)
  })
})
