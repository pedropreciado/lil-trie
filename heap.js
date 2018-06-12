class minHeap {
    constructor(store = []) {
        this.store = store;

        this.peek = this.peek.bind(this);
        this.count = this.count.bind(this);
        this.extract = this.extract.bind(this);
        this.push = this.push.bind(this);
    }

    peek() {        
        return this.store[0];
    }

    count() {
        return this.store.length;
    }

    extract() {
        let extraction = this.store.shift();
        this.store = this.constructor.heapifyDown(this.store, 0, this.count());

        return extraction;
    }

    push(val) {
        this.store.push(val);
        this.store = this.constructor.heapifyUp(this.store, this.store.length - 1, this.store.length);
        
        return this.store;
    }
    
    static getParentIndex(childIndex) {
        if (childIndex === 0) {
            return;
        }

        if (childIndex % 2 === 1) {
            return (childIndex / 2);
        } else {
            return (childIndex / 2) - 1;
        }
    }

    static getChildIndices(len, parentIndex) {
        let leftIndex = 2 * parentIndex + 1;
        let rightIndex = 2 * parentIndex + 2;
        let leftInRange = leftIndex < len;
        let rightInRange = rightIndex < len;
        
        if (leftInRange && rightInRange) {
            return [leftIndex, rightIndex];
        } else if (leftInRange && !rightInRange) {
            return [leftIndex];
        } else if (!leftInRange && rightInRange) {
            return [rightIndex];
        } else {
            return [];
        }
    }

    static heapifyDown(array, parentIndex, len = array.length) {
        let parent = array[parentIndex];
        let children = this.constructor.getChildIndices(array.length, parentIndex);

        if (!children.length) {
            return array;
        }

        let maxIndex = Math.min(children[0], children[1]);
        let maxChild = array[maxIndex];

        if (parent > maxChild) {
            [ array[parentIndex, array[maxIndex]] ] = [maxChild, parent];
        } else {
            return array;
        }

        this.constructor.heapifyDown(array, maxIndex, array.length);
    }

    static heapifyUp(array, childIndex, len = array.length) {
        if (childIndex === 0) {
            return array;
        }
        
        let parentIndex = this.getParentIndex(childIndex);
        let parent = array[parentIndex];
        let child = array[childIndex];

        if (child < parent) {
            [ array[parentIndex], array[childIndex] ] = [child, parent];
        } else {
            return array;
        }

        this.constructor.heapifyUp(array, parentIndex, array.length);
    }
}

class maxHeap {
    constructor(store = []) {
        this.store = store;
    }
}

let heap = new minHeap([4, 2, 5, 23, 3, 5]);
console.log(heap.push(6));
