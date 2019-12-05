import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HtmlReport } from './reportTargets/HtmlReport'
import { Summary } from './Summary'

// "Favor object composition over class inheritance"
const csvFileReader = new CsvFileReader('football.csv')

const matchReader = new MatchReader(csvFileReader)
matchReader.load()

const summarizedManUnitedWinsH = new Summary(new WinsAnalysis('Man United'), new HtmlReport())
summarizedManUnitedWinsH.buildAndPrintReport(matchReader.matches)

const summarizedManUnitedWinsC = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
summarizedManUnitedWinsC.buildAndPrintReport(matchReader.matches)

const summarizedBournemouthWins = Summary.winsAnalysisWithConsoleReport('Bournemouth')
summarizedBournemouthWins.buildAndPrintReport(matchReader.matches)
