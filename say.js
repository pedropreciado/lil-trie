var countAndSay = function (n) {
    let result = '1';
    let time = 1;

    while (time < n) {
        let newResult = '';
        for (let i = 0 ; i < result.length; i++) {
            newResult += getSeq(result.slice(i), result[i]) + result[i];
        }

        result = newResult;
        time++
    }

    return result;
};

function getSeq(string, char) {
    let count = 1;
    let i = 0;

    while (string[i + 1] === char) {
        count++
    }

    return count;
}

let result = countAndSay(3)
console.log(result);
