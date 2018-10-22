/**
 * 数组索引从1开始
 * parent(i) = Math.floor(i / 2)
 * leftchild(i) = 2 * i
 * rightChild(i) = 2 * i + 1
 * 最后一个非叶子节点 = parent(count)
 */
declare class MaxHeap {
    private data;
    private count;
    constructor(array?: any);
    private constructorDefault();
    private heapify(array);
    getSize(): number;
    isEmpty(): boolean;
    insert(item: number): void;
    extractMax(): any;
    private shiftUp(k);
    private getParentIndex(index);
    private shiftDown(k);
    private swap(a, b);
    printData(): void;
    private compare(a, b);
}
declare const maxHeap: MaxHeap;
declare const maxHeap1: MaxHeap;
