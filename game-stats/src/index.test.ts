import { matches, manUnitedWins } from './index'

const matchesData = matches()

test('matches can read the CSV file', () => {
  expect(matchesData).toBeTruthy()
})

test('matches can parse the data into a 2D array', () => {
  const row0 = ['10/08/2018', 'Man United', 'Leicester', '2', '1', 'H', 'A Marriner']
  expect(matchesData[0]).toStrictEqual(row0)
})

test('Calculated Man United wins to be 18', () => {
  expect(manUnitedWins()).toBe(18)
})
