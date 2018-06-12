function everyOther(arr) {
    var result = [];
    
    while (arr.length !== 0) {
        for (var i = 0; i < arr.length; i += 1) {
            let num = arr.splice(i, 1)[0];
            result.push(num);
        }

        for (var j = arr.length - 1; j >= 0; j -= 2) {
            result.push(arr.splice(j, 1)[0]);
        }
    }

    return result;
}

console.log(everyOther([1, 2, 3, 4, 5, 6, 7, 8, 9]))
