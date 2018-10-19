declare class MaxHeap {
    private data;
    private count;
    constructor(array?: any);
    private constructorDefault();
    private constructorByArray(array);
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
