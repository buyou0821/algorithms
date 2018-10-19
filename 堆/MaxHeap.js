// tsc MaxHeap.ts --lib dom,es6 && node MaxHeap.js
var MaxHeap = /** @class */ (function () {
    function MaxHeap(array) {
        if (array) {
            this.constructorByArray(array);
        }
        else {
            this.constructorDefault();
        }
    }
    MaxHeap.prototype.constructorDefault = function () {
        this.count = 0;
        this.data = [];
    };
    MaxHeap.prototype.constructorByArray = function (array) {
        this.data = Array.from({ length: 1 }).concat(array);
        this.count = array.length;
        for (var i = this.getParentIndex(this.count); i >= 1; i--) {
            this.shiftDown(i);
        }
    };
    MaxHeap.prototype.getSize = function () {
        return this.count;
    };
    MaxHeap.prototype.isEmpty = function () {
        return this.count === 0;
    };
    MaxHeap.prototype.insert = function (item) {
        this.count++;
        this.data[this.count] = item;
        this.shiftUp(this.count);
    };
    MaxHeap.prototype.extractMax = function () {
        if (this.count === 0)
            console.error('无可取出的元素');
        var ret = this.data[1];
        this.swap(1, this.count);
        this.count--;
        this.shiftDown(1);
        return ret;
    };
    MaxHeap.prototype.shiftUp = function (k) {
        while (k > 1 && this.compare(this.data[k], this.data[this.getParentIndex(k)]) > 0) {
            this.swap(k, this.getParentIndex(k));
            k = this.getParentIndex(k);
        }
    };
    MaxHeap.prototype.getParentIndex = function (index) {
        return Math.floor(index / 2);
    };
    MaxHeap.prototype.shiftDown = function (k) {
        while (2 * k <= this.count) {
            var childIndex = 2 * k;
            if (childIndex + 1 <= this.count &&
                this.compare(this.data[childIndex + 1], this.data[childIndex]) > 0) {
                childIndex++;
            }
            if (this.compare(this.data[k], this.data[childIndex]) >= 0)
                break;
            this.swap(k, childIndex);
            k = childIndex;
        }
    };
    MaxHeap.prototype.swap = function (a, b) {
        _a = [this.data[b], this.data[a]], this.data[a] = _a[0], this.data[b] = _a[1];
        var _a;
    };
    MaxHeap.prototype.printData = function () {
        console.log(this.data.slice(1) + ", size: " + this.getSize());
    };
    MaxHeap.prototype.compare = function (a, b) {
        return a - b;
    };
    return MaxHeap;
}());
var maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.printData();
for (var i = 0; i < 3; i++) {
    console.log(maxHeap.extractMax());
}
console.log('-------------');
var maxHeap1 = new MaxHeap([1, 2, 3]);
maxHeap1.printData();
for (var i = 0; i < 3; i++) {
    console.log(maxHeap1.extractMax());
}
