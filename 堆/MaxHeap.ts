// 优先队列
// tsc MaxHeap.ts --lib dom,es6 -d && node MaxHeap.js
class MaxHeap {
  private data: Array <any>
  private count: number
  constructor(array?) {
    if (array) {
      this.constructorByArray(array)
    } else {
      this.constructorDefault()
    }
  }
  private constructorDefault() {
    this.count = 0
    this.data = []
  }
  private constructorByArray(array) {
    this.data = Array.from({ length: 1 }).concat(array)
    this.count = array.length
    for (let i = this.getParentIndex(this.count); i >= 1; i--) {
      this.shiftDown(i)
    }
  }
  public getSize(): number {
    return this.count
  }
  public isEmpty(): boolean {
    return this.count === 0
  }
  public insert(item: number): void {
    this.count++
    this.data[this.count] = item
    this.shiftUp(this.count)
  }
  public extractMax(): any {
    if (this.count === 0)
      throw new Error('无可取出的元素')
    const ret = this.data[1]
    this.swap(1, this.count)
    this.count--
    this.shiftDown(1)
    return ret
  }
  private shiftUp(k: number): void {
    while (k > 1 && this.compare(this.data[k], this.data[this.getParentIndex(k)]) > 0) {
      this.swap(k, this.getParentIndex(k))
      k = this.getParentIndex(k)
    }
  }
  private getParentIndex(index: number): number {
    return Math.floor(index / 2)
  }
  private shiftDown(k: number): void {
    while (2 * k <= this.count) {
      let childIndex: number = 2 * k
      if (childIndex + 1 <= this.count &&
        this.compare(this.data[childIndex + 1], this.data[childIndex]) > 0
      ) {
        childIndex++
      }
      if (this.compare(this.data[k], this.data[childIndex]) >= 0) break
      this.swap(k, childIndex)
      k = childIndex
    }
  }
  private swap(a: any, b: any): void {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }
  public printData(): void {
    console.log(`${this.data.slice(1)}, size: ${this.getSize()}`)
  }
  private compare(a, b): number {
    return a - b
  }
}

const maxHeap = new MaxHeap()
maxHeap.insert(1)
maxHeap.insert(2)
maxHeap.insert(3)
maxHeap.printData()
for (let i = 0; i < 3; i++) {
  console.log(maxHeap.extractMax())
}
console.log('-------------')
const maxHeap1 = new MaxHeap([1, 2, 3])
maxHeap1.printData()
for (let i = 0; i < 3; i++) {
  console.log(maxHeap1.extractMax())
}