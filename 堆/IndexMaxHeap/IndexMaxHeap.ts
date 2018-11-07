// tsc IndexMaxHeap.ts --lib dom,es6 && node IndexMaxHeap.js
class IndexMaxHeap {
  private data
  private count
  private indexes
  constructor() {
    this.data = []
    this.count = 0
    this.indexes = []
  }
  public insert(item): void {
    this.count++
    this.data[this.count] = item
    this.indexes[this.count] = this.count
    this.shiftUp(this.count)
  }
  private shiftUp(k: number): void {
    while(k > 1 &&
      this.compare(this.data[this.indexes[k]], this.data[this.indexes[this.getParentIndex(k)]]) > 0
    ) {
      this.swap(this.indexes, k, this.getParentIndex(k))
      k = this.getParentIndex(k)
    }
  }
  public extractMax(): any {
    if (this.count === 0) throw new Error('没有可取出的元素')
    const ret = this.data[this.indexes[1]]
    this.swap(this.indexes, 1, this.count--)
    this.shiftDown(1)
    return ret
  }
  private shiftDown(k: number): void {
    while(k * 2 <= this.count) {
      let j = k * 2
      if (j + 1 <= this.count &&
        this.compare(this.data[this.indexes(j + 1)], this.data[this.indexes[j]]) > 0
      ) {
        j++
      }
      if (this.compare(this.data[this.indexes[k]], this.data[this.indexes[j]]) > 0)
        break
      this.swap(this.indexes, k , j)
      k = j
    }
  }
  private compare(a, b): number {
    return a - b
  }
  private getParentIndex(index: number): number {
    return Math.floor(index / 2)
  }
  private swap(array: Array<any>, a: number, b: number): void {
    [array[a], array[b]] = [array[b], array[a]]
  }
  public getSize(): number {
    return this.count
  }
  public print(): void {
    console.log(`indexes: ${this.indexes.slice(1)} | data: ${this.data.slice(1)} | size: ${this.getSize()}`)
  }
}

const indexMaxHeap = new IndexMaxHeap()
for (let i = 3; i < 6; i++) {
  indexMaxHeap.insert(i)
  indexMaxHeap.print()
}
for (let i = 3; i < 6; i++) {
  console.log(indexMaxHeap.extractMax())
  indexMaxHeap.print()
}
