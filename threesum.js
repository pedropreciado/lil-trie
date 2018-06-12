var threeSum = function (nums) {
    let results = [];
    let seen = {};

    for (var i = 0; i < nums.length; i++) {
        let num = nums[i];
        console.log(num)
        let compliments = twoSum(nums, num, i);
        console.log(compliments)
        results = results
            .concat(compliments
                .filter((pair) => {
                    return pair
                        .reduce((acc, single) => {
                            acc + single
                        }) - num === 0;
                })
                )
    }

    console.log('results: ', results)
};

var twoSum = function (nums, target, targetIndex) {
    let seen = {};
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (seen[num]) {
            results.push([target - num, num])
        } else {
            seen[target - num] = num;
        }
        console.log(nums, target, seen)
    }

    return results;
}

let result = threeSum([-1, 0, 1, 2, -1, -4]);

console.log(result);
