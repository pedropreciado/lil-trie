// var base = [2, 2, 2, 2] => [[16], [8, 8], [4, 4, 4], [2, 2, 2, 2]];

function pyramid(base) {
    if (base.length === 1) {
        return [base];
    }

    var floor = [];

    for (var i = 0; i < base.length - 1; i++) {
        floor.push(base[i] + base[i + 1]);
    }

    var top = pyramid(floor);

    return top.concat([base]);
}

console.log(pyramid([2, 2, 2, 2]));

