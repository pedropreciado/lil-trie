var isNStraightHand = function (hand, W) {
    if (hand.length % W !== 0) {
        return false;
    }    
    let count = 0
    hand = hand.sort((a, b) => { return a - b })

    while (hand.length) {
        let group = [];
        let first = hand.shift();
        group.push(first)
        let i = 0;

        while (group.length < W) {
            if (i > hand.length - 1) {
                return false;
            }
            let last = group[group.length - 1];

            if (hand[i] === last + 1) {
                group.push(hand.splice(i, 1)[0]);
            } else {
                i++
            }
        }

        count++
    }

    return true;
};

console.log(isNStraightHand([1, 1, 2, 2, 3, 3], 3))
