import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.bubbleSort()
console.log(numbersCollection.data)

const linkedList = new LinkedList()
linkedList.add(9)
linkedList.add(1)
console.log(linkedList.print())
