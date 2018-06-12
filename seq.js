function seq(arr, target) {
    let sum = 0;
    let tail = 0;

    for (let i = 0; i < arr.length;) {
        let num = arr[i];

        if (sum > target) {
            sum -= arr[tail];
            tail++
        } else if (sum === target) {
            return true;
        } else {
            sum += num;
            i++
        }
    }

    return false;
}

let result = seq([1, 3, 2, 4, 6, 4], 9);
let result2 = seq([100, 3, 2, 4, 6, 4], 12);
let result3 = seq([100, 3, 2, 4, 6, 4], 11);

console.log(result, result2, result3)