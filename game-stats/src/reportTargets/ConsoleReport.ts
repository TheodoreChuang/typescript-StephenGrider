import { OutputTarget } from '../Summary'

export class ConsoleReport implements OutputTarget {
  print(report: String): void {
    console.log(report)
  }
}
