const binarySearch = (arr = [], target = 0) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === arr[mid]) return mid;
    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

const arr = [1, 2, 3, 4];
console.log(binarySearch(arr, 4));
