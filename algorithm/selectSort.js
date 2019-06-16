// 选择排序
let list = [];
let newList = [];
for (let i = 0; i < 10; i++) {
    list.push(Math.round(Math.random() * 100))
}

function findMax(list) {
    let max = -1;
    let maxIndex = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] >= max) {
            max = list[i];
            maxIndex = i;
        }
    }
    list[maxIndex] = -1;
    return max;
}

function selectSort(list) {
    for (let i = 0; i < list.length; i++) {
        newList.push(findMax(list));
    }
}

selectSort(list);

console.info(newList)