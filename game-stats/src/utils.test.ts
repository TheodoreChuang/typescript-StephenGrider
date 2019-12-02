import { dateStringToDate } from './utils'

test('dateStringToDate returns instance of Date object', () => {
  const Oct282019 = new Date(2019, 9, 28)
  expect(dateStringToDate('28/10/2019')).toBeInstanceOf(Date)
  expect(dateStringToDate('28/10/2019')).toStrictEqual(Oct282019)

  const Feb011970 = new Date(1970, 1, 1)
  expect(dateStringToDate('1/2/1970')).toStrictEqual(Feb011970)

  const Nov301990 = new Date(1990, 10, 30)
  expect(dateStringToDate('30/11/1990')).toStrictEqual(Nov301990)
})
