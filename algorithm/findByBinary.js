// 二分查找
function findBybinary(list, value) {
    let low = 0;
    let high = list.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // console.info(low, high, mid);
        if (list[mid] === value) {
            return value;
        }
        if (list[mid] > value) {
            high = mid - 1;
        } else if (list[mid] < value) {
            low = mid + 1;
        }
    }
    return -1;
}

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.info(findBybinary(list, 2));