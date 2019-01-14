// 题目
// const a = [1, 2, 3, 4, 5];
// // Implement this
// a.multiply();
// console.log(a); // [1, 2, 3, 4, 5, 1, 4, 9, 16, 25]

// 知识点

/**
 * 为原型添加一个方法
 * 数据常用方法的使用
 * 解构赋值
 */
const a = [1, 2, 3, 4, 5]

Object.defineProperty(Array.prototype, 'multiply', {
    value: function () {
        this.push(...this.map(v => v * v));
    }
});

Array.prototype.multiply = function () {
    this.push(...this.map(v => v * v));
    return this;
}

a.multiply();

console.info(a);