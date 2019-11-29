import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'

test('Sorts an array of numbers', () => {
  const numbersCollection = new NumbersCollection([10, 3, -5, 0])
  const sorter = new Sorter(numbersCollection)
  sorter.sort()
  expect(numbersCollection.data).toStrictEqual([-5, 0, 3, 10])
})
