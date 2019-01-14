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