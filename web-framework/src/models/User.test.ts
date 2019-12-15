import { User } from './User'

describe('Test User model', () => {
  let testUser: User
  beforeEach(() => (testUser = new User({ name: 'John Citizen', age: 99 })))

  const mockCallbackEvent = jest.fn()

  test('Creates an new user given expected arguments', () => {
    expect(testUser).toBeInstanceOf(User)
  })

  test('GET a specific attribute of an user', () => {
    expect(testUser.get('name')).toBe('John Citizen')
  })

  test('SET all attribute of an user', () => {
    testUser.attributes.set({ name: 'Jane', age: 1 })
    expect(testUser.get('name')).toBe('Jane')
  })

  // test('ON registers an event', () => {
  //   expect(testUser.events).toStrictEqual({})

  //   testUser.on('click', mockCallbackEvent)
  //   testUser.on('click', mockCallbackEvent)
  //   expect(testUser.events['click'].length).toBe(2)
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
})
