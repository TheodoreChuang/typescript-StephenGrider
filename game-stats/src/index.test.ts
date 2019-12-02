import { manUnitedWins } from './index'
import { CsvFileReader } from './CsvFileReader'

const reader = new CsvFileReader('football.csv')
reader.read()

test('CsvFileReader can read the CSV file', () => {
  expect(reader.data).toBeTruthy()
})

test('CsvFileReader can parse the data into a 2D array', () => {
  expect(Array.isArray(reader.data)).toBeTruthy()
  expect(Array.isArray(reader.data[0])).toBeTruthy()
})

test('CsvFileReader transforms first row as expected', () => {
  const row0 = [new Date(2018, 7, 10), 'Man United', 'Leicester', 2, 1, 'H', 'A Marriner']
  expect(reader.data[0]).toStrictEqual(row0)
})

test('Calculated Man United wins to be 18', () => {
  expect(manUnitedWins()).toBe(18)
})
