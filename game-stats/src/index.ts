import fs from 'fs'

export const matches = (): string[][] => {
  return fs
    .readFileSync('football.csv', { encoding: 'utf-8' })
    .split('\n')
    .map((row: string): string[] => row.split(','))
}

// console.log(matches())

export const manUnitedWins = (): number => {
  let manUnitedWins = 0
  for (let match of matches()) {
    if (match[1] === 'Man United' && match[5] === 'H') {
      manUnitedWins++
    }
    if (match[2] === 'Man United' && match[5] === 'A') {
      manUnitedWins++
    }
  }
  return manUnitedWins
}

console.log(`Man United won ${manUnitedWins()} games.`)
