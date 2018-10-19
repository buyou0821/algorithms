// 3路快速排序
const quickSort3 = arr => {
  __quickSort3(arr, 0, arr.length);
};
const __quickSort3 = (arr, l, r) => {
  if (l >= r) return;
  const [a, b] = __partition3(arr, l, r);
  __quickSort3(arr, l, a);
  __quickSort3(arr, b, r);
};
const __partition3 = (arr, l, r) => {
  const randomNumber = Math.floor(Math.random() * (r - l + 1)) + l;
  [arr[l], arr[randomNumber]] = [arr[randomNumber], arr[l]];
  let lt = l; // [l+1...lt]
  let i = l + 1; // [l+1...i]
  let gt = r + 1; // [gt...r]
  const v = arr[l];
  while (i < gt) {
    if (arr[i] < v) {
      [arr[i], arr[lt + 1]] = [arr[lt + 1], arr[i]];
      i++;
      lt++;
    } else if (arr[i] > v) {
      [arr[i], arr[gt - 1]] = [arr[gt - 1], arr[i]];
      gt--;
    } else {
      i++;
    }
  }
  [arr[l], arr[lt]] = [arr[lt], arr[l]];
  return [lt - 1, gt];
};

// 2路快速排序
const quickSort2 = arr => {
  __quickSort2(arr, 0, arr.length - 1);
};
const __quickSort2 = (arr, l, r) => {
  if (l >= r) return;
  const p = __partition2(arr, l, r);
  __quickSort2(arr, l, p - 1);
  __quickSort2(arr, p + 1, r);
};
const __partition2 = (arr, l, r) => {
  const randomNumber = Math.floor(Math.random() * (r - l + 1)) + l;
  [arr[l], arr[randomNumber]] = [arr[randomNumber], arr[l]];
  const v = arr[l];
  let i = l + 1,
    j = r;
  while (true) {
    while (i <= r && arr[i] < v) i++;
    while (j >= l + 1 && arr[j] > v) j--;
    if (i >= j) break;
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
};

// 快速排序
const quickSort = arr => {
  __quickSort(arr, 0, arr.length - 1);
};
const __quickSort = (arr, l, r) => {
  if (r - l <= 15) {
    __insertionSort(arr, l, r);
    return;
  }
  const pivot = __partition(arr, l, r);
  __quickSort(arr, l, pivot - 1);
  __quickSort(arr, pivot + 1, r);
};
const __partition = (arr, l, r) => {
  const randomNumber = Math.floor(Math.random() * (r - l + 1)) + l;
  [arr[l], arr[randomNumber]] = [arr[randomNumber], arr[l]];
  const v = arr[l];
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      [arr[j + 1], arr[i]] = [arr[i], arr[j + 1]];
      j++;
    }
  }
  [arr[l], arr[j]] = [arr[j], arr[l]];
  return j;
};

// 自底向上的归并排序
const mergeSortBU = arr => {
  const len = arr.length;
  // size: 进行merge的元素个数
  for (let size = 1; size < len; size += size) {
    for (let i = 0; i + size - 1 < len - 1; i += 2 * size) {
      // 对[i, i + size - 1]和[i + size, i + 2 * size - 1]进行归并
      __merge(arr, i, i + size - 1, Math.min(i + 2 * size - 1, len - 1));
    }
  }
};
// 归并排序
const mergeSort = arr => {
  __mergeSort(arr, 0, arr.length - 1);
};
const __mergeSort = (arr, l, r) => {
  if (r - l <= 15) {
    __insertionSort(arr, l, r);
    return;
  }
  const mid = Math.floor((l + r) / 2);
  __mergeSort(arr, l, mid);
  __mergeSort(arr, mid + 1, r);
  if (arr[mid] > arr[mid + 1]) {
    __merge(arr, l, mid, r);
  }
};
const __merge = (arr, l, mid, r) => {
  const aux = arr.slice(l, r + 1);
  let i = l,
    j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = aux[j - l];
      j++;
    } else if (j > r) {
      arr[k] = aux[i - l];
      i++;
    } else if (aux[i - l] < aux[j - l]) {
      arr[k] = aux[i - l];
      i++;
    } else {
      arr[k] = aux[j - l];
      j++;
    }
  }
};
const __insertionSort = (arr, l, r) => {
  for (let i = l + 1; i <= r; i++) {
    for (let j = i; j > l && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
};

// 插入排序
const insertionSort = arr => {
  for (let i = 1, len = arr.length; i < len; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
};

// 选择排序
const selectionSort = arr => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let miniIndex = i;
    // 寻找[i, n)之间的最小值;
    for (let j = i; j < len; j++) {
      if (arr[j] < arr[miniIndex]) miniIndex = j;
    }
    [arr[i], arr[miniIndex]] = [arr[miniIndex], arr[i]];
  }
  return arr;
};

const logs = (...args) => console.log(...args);

// 生成有n个元素的随机数组，每个元素的随机范围是[l, r]
const generateRandomArray = (n = 10, l = 0, r = 100) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    const randomNumber = Math.floor(Math.random() * (r - l + 1)) + l;
    result.push(randomNumber);
  }
  return result;
};

const testSort = (sortFn, array = generateRandomArray(20000), ...args) => {
  const arr = [...array];
  const beginTime = new Date();
  sortFn(arr, ...args);
  const endTime = new Date();
  if (isSort(arr)) {
    logs(`${sortFn.name} passed, uesd ${endTime - beginTime}ms.`);
  } else {
    console.error(`${sortFn.name} failed.`);
  }
};

const isSort = arr => {
  for (let i = 0, len = arr.length - 1; i < len; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
};

const randomArray = generateRandomArray(9999);
testSort(quickSort3, randomArray);
testSort(quickSort2, randomArray);
testSort(quickSort, randomArray);
testSort(mergeSortBU, randomArray);
testSort(mergeSort, randomArray);
testSort(__insertionSort, randomArray, 0, randomArray.length);
testSort(insertionSort, randomArray);
testSort(selectionSort, randomArray);
logs("--------------------");
