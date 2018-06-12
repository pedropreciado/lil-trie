var flipAndInvertImage = function (A) {
    let result = [];

    for (let i = 0; i < A.length; i++) {
        let subArr = A[i];
        result.push(process(subArr));
    }

    return result;
};

function process(list) {
    let flip = [];

    for (let i = list.length - 1; i >= 0; i--) {
        flip.push(list[i] === 1 ? 0 : 1);
    }

    return flip;
}

console.log(flipAndInvertImage([
    [1,1,0], [1, 0, 1], [0, 0, 0]]))