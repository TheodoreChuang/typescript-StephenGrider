import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { Node, LinkedList } from './LinkedList'

/* NumbersCollection */
test('NumbersCollection can compare and swap its data', () => {
  const numbersCollection = new NumbersCollection([10, 3, 5])

  expect(numbersCollection.compare(0, 1)).toBe(true)
  expect(numbersCollection.compare(1, 2)).toBe(false)

  const swapped = numbersCollection.swap(0, 1)
  expect(numbersCollection.data).toStrictEqual([3, 10, 5])
})

/* CharactersCollection */
test('CharactersCollection can compare and swap its data', () => {
  const charactersCollection = new CharactersCollection('Zap')

  expect(charactersCollection.compare(0, 1)).toBe(true)
  expect(charactersCollection.compare(1, 2)).toBe(false)

  const swapped = charactersCollection.swap(0, 1)
  expect(charactersCollection.data).toBe('aZp')
})

/* LinkedList */
test('LinkedList can create a new list and add nodes', () => {
  const linkedList = new LinkedList()
  expect(linkedList.length).toBe(0)

  linkedList.add(9)
  expect(linkedList.length).toBe(1)
  linkedList.add(1)
  expect(linkedList.length).toBe(2)
})

test('LinkedList can return the node at a specific index', () => {
  const linkedList = new LinkedList()
  expect(() => linkedList.at(0)).toThrow('Index out of bounds')

  linkedList.add(9)
  linkedList.add(1)

  const targetNode = linkedList.at(1)
  expect(targetNode).toBeInstanceOf(Node)
  expect(targetNode.data).toBe(1)
})

test('LinkedList can compare the values of two nodes', () => {
  const linkedList = new LinkedList()
  linkedList.add(2)
  linkedList.add(5)
  linkedList.add(3)

  expect(linkedList.compare(0, 1)).toBeFalsy()
  expect(linkedList.compare(1, 2)).toBeTruthy()
})

test('LinkedList can swap the values of two nodes', () => {
  const linkedList = new LinkedList()
  linkedList.add(6)
  linkedList.add(8)
  linkedList.swap(0, 1)

  expect(linkedList.at(0).data).toBe(8)
})

/* Sorter */
test('Sorts an array of numbers', () => {
  const numbersCollection = new NumbersCollection([10, 3, -5, 0])
  const sorter = new Sorter(numbersCollection)
  sorter.bubbleSort()
  expect(numbersCollection.data).toStrictEqual([-5, 0, 3, 10])
})

test('Sorts an string of characters', () => {
  const charactersCollection = new CharactersCollection('aAXaxzZa')
  const sorter = new Sorter(charactersCollection)
  sorter.bubbleSort()
  expect(charactersCollection.data).toBe('aAaaXxzZ')
})

test('Sorts a linked list of numbers', () => {
  const linkedList = new LinkedList()
  linkedList.add(345)
  linkedList.add(-45)
  linkedList.add(935)

  const sorter = new Sorter(linkedList)
  sorter.bubbleSort()
  expect(linkedList.at(0).data).toBe(-45)
  expect(linkedList.at(2).data).toBe(935)
})
