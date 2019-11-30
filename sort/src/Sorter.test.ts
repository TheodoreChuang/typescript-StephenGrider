import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'

test('NumbersCollection can compare and swap its data', () => {
  const numbersCollection = new NumbersCollection([10, 3, 5])

  expect(numbersCollection.compare(0, 1)).toBe(true)
  expect(numbersCollection.compare(1, 2)).toBe(false)

  const swapped = numbersCollection.swap(0, 1)
  expect(numbersCollection.data).toStrictEqual([3, 10, 5])
})

test('Sorts an array of numbers', () => {
  const numbersCollection = new NumbersCollection([10, 3, -5, 0])
  const sorter = new Sorter(numbersCollection)
  sorter.bubbleSort()
  expect(numbersCollection.data).toStrictEqual([-5, 0, 3, 10])
})

test('CharactersCollection can compare and swap its data', () => {
  const charactersCollection = new CharactersCollection('Zap')

  expect(charactersCollection.compare(0, 1)).toBe(true)
  expect(charactersCollection.compare(1, 2)).toBe(false)

  const swapped = charactersCollection.swap(0, 1)
  expect(charactersCollection.data).toBe('aZp')
})

test('Sorts an string of characters', () => {
  const charactersCollection = new CharactersCollection('aAXaxzZa')
  const sorter = new Sorter(charactersCollection)
  sorter.bubbleSort()
  expect(charactersCollection.data).toBe('aAaaXxzZ')
})
