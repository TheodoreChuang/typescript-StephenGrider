import { Sorter } from './Sorter'

export class NumbersCollection extends Sorter {
  // collection: number[]

  // constructor(collection: number[]) {
  //   this.collection = collection
  // }

  constructor(public data: number[]) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }
}
