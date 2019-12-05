import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { Summary } from './Summary'

// "Favor object composition over class inheritance"
const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summarizedManUnitedWins = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())

summarizedManUnitedWins.buildAndPrintReport(matchReader.matches)
