function swapValue(x, y) {
    [x, y] = [y, x];
    return [x, y];
};

let x =5;
let y =6;
[x, y] = swapValue(x, y);
console.log(x, y);