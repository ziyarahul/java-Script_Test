function rotateArray(arr, d, n) {
    if (!n)
    return arr;
    let index = -1;
    while (++index <= d) {
        arr.unshift(arr.pop());
    }
    return arr;
}
arr = [1,2,3,4,5]
n=5
d=2
console.log(rotateArray(arr, d, n))