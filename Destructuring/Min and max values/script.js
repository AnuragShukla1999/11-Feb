function findMinMax(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return {max, min};
}
let arr = [9, 4, 6, 11, 2];
let result = findMinMax(arr);
console.log(result);  // Output: {max: 11, min:2}