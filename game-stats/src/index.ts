import { MatchReader } from './MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { MatchResult } from './MatchResult'

// "Favor object composition over class inheritance"
const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

export const manUnitedWins = (): number => {
  let manUnitedWins = 0
  for (let match of matchReader.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
      manUnitedWins++
    }
    if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
      manUnitedWins++
    }
  }
  return manUnitedWins
}

console.log(`Man United won ${manUnitedWins()} games.`)
