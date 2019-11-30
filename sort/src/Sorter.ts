// interface Sortable {
//   length: number
//   compare(leftIndex: number, rightIndex: number): boolean
//   swap(leftIndex: number, rightIndex: number): void
// }

// https://www.typescriptlang.org/docs/handbook/classes.html#abstract-classes
export abstract class Sorter {
  abstract length: number
  abstract compare(leftIndex: number, rightIndex: number): Boolean
  abstract swap(leftIndex: number, rightIndex: number): void

  bubbleSort(): void {
    const { length } = this

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}
