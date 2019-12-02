import { manUnitedWins } from './index'
import { MatchReader } from './MatchReader'

const reader = new MatchReader('football.csv')
reader.read()

test('MatchReader can read the CSV file', () => {
  expect(reader.data).toBeTruthy()
})

test('MatchReader can parse the data into a 2D array', () => {
  expect(Array.isArray(reader.data)).toBeTruthy()
  expect(Array.isArray(reader.data[0])).toBeTruthy()
})

test('MatchReader transforms first row as expected', () => {
  const row0 = [new Date(2018, 7, 10), 'Man United', 'Leicester', 2, 1, 'H', 'A Marriner']
  expect(reader.data[0]).toStrictEqual(row0)
})

test('Calculated Man United wins to be 18', () => {
  expect(manUnitedWins()).toBe(18)
})
