import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { Summary } from './Summary'

const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

test('MatchReader can read the CSV file', () => {
  expect(matchReader.matches).toBeTruthy()
})

test('MatchReader can parse the data into a 2D array', () => {
  expect(Array.isArray(matchReader.matches)).toBeTruthy()
  expect(Array.isArray(matchReader.matches[0])).toBeTruthy()
})

test('MatchReader transforms first row as expected', () => {
  const row0 = [new Date(2018, 7, 10), 'Man United', 'Leicester', 2, 1, 'H', 'A Marriner']
  expect(matchReader.matches[0]).toStrictEqual(row0)
})

test('Calculated Man United wins correctly', () => {
  const analyzeManUnitedWins = new WinsAnalysis('Man United').run(matchReader.matches)
  expect(analyzeManUnitedWins).toBe('Team Man United won 18 games.')
})

test('Calculated Bournemouth wins correctly', () => {
  const analyzeManUnitedWins = new WinsAnalysis('Bournemouth').run(matchReader.matches)
  expect(analyzeManUnitedWins).toBe('Team Bournemouth won 11 games.')
})
