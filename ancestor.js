class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let A = new Node(10);
let B = new Node(8);
let C = new Node(12);
let D = new Node(7);
let E = new Node(9);
let F = new Node(11);
let G = new Node(13);
let H = new Node(6);

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.left = F;
C.right = G;
D.left = H;

function closestAncestor(node1, node2, root) {
        let trail1 = [];
        let trail2 = [];

        getTrail(root, node1, trail1);
        getTrail(root, node2, trail2);

        for (let i = 0; i < Math.max(trail1.length, trail2.length); i++) {
            for (let j = 0; j < Math.min(trail1.length, trail2.length); j++) {
                if (trail1[i] === trail2[j]) {
                    return trail1[i];
                }
            }
        }

        return root; 
}

function getTrail(node, target, trail) {
    if (node === target) {
        return true;        
    } else if (!node) {
        return false
    } else if (node.left && getTrail(node.left, target, trail)) {
        trail.push(node.left);
        return true;
    } else if (node.right && getTrail(node.right, target, trail)) {
        trail.push(node.right);
        return true;
    }
}

let result = closestAncestor(H, G, A);
console.log(result.value);
