// tsc IndexMaxHeap.ts --lib dom,es6 && node IndexMaxHeap.js
var IndexMaxHeap = /** @class */ (function () {
    function IndexMaxHeap() {
        this.data = [];
        this.count = 0;
        this.indexes = [];
    }
    IndexMaxHeap.prototype.insert = function (item) {
        this.count++;
        this.data[this.count] = item;
        this.indexes[this.count] = this.count;
        this.shiftUp(this.count);
    };
    IndexMaxHeap.prototype.shiftUp = function (k) {
        while (k > 1 &&
            this.compare(this.data[this.indexes[k]], this.data[this.indexes[this.getParentIndex(k)]]) > 0) {
            this.swap(this.indexes, k, this.getParentIndex(k));
            k = this.getParentIndex(k);
        }
    };
    IndexMaxHeap.prototype.extractMax = function () {
        if (this.count === 0)
            throw new Error('没有可取出的元素');
        var ret = this.data[this.indexes[1]];
        this.swap(this.indexes, 1, this.count--);
        this.shiftDown(1);
        return ret;
    };
    IndexMaxHeap.prototype.shiftDown = function (k) {
        while (k * 2 <= this.count) {
            var j = k * 2;
            if (j + 1 <= this.count &&
                this.compare(this.data[this.indexes(j + 1)], this.data[this.indexes[j]]) > 0) {
                j++;
            }
            if (this.compare(this.data[this.indexes[k]], this.data[this.indexes[j]]) > 0)
                break;
            this.swap(this.indexes, k, j);
            k = j;
        }
    };
    IndexMaxHeap.prototype.compare = function (a, b) {
        return a - b;
    };
    IndexMaxHeap.prototype.getParentIndex = function (index) {
        return Math.floor(index / 2);
    };
    IndexMaxHeap.prototype.swap = function (array, a, b) {
        _a = [array[b], array[a]], array[a] = _a[0], array[b] = _a[1];
        var _a;
    };
    IndexMaxHeap.prototype.getSize = function () {
        return this.count;
    };
    IndexMaxHeap.prototype.print = function () {
        console.log("indexes: " + this.indexes.slice(1) + " | data: " + this.data.slice(1) + " | size: " + this.getSize());
    };
    return IndexMaxHeap;
}());
var indexMaxHeap = new IndexMaxHeap();
for (var i = 3; i < 6; i++) {
    indexMaxHeap.insert(i);
    indexMaxHeap.print();
}
for (var i = 3; i < 6; i++) {
    console.log(indexMaxHeap.extractMax());
    indexMaxHeap.print();
}
