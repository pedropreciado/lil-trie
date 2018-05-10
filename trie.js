class Node {
  constructor(value, children) {
    this.value = value;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();

    this.insert = this.insert.bind(this);
    this.search = this.search.bind(this);
  }

  insert(str) {
    let prevLetter = this.root;

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let currentLetter = new Node(char);

      if (!prevLetter.children[char]) {
        prevLetter.children[char] = currentLetter;
      }

      prevLetter = prevLetter.children[char];
    }

    return this;
  }

  search(str) {
    let prevLetter = this.root;

    for (let i = 0; i < str.length; i++) {
      let char = str[i];

      if (!prevLetter.children[char]) {
        return false
      }

      prevLetter = prevLetter.children[char];
    }


    return true;
  }
}

let trie = new Trie();

trie.insert('bear');
trie.insert('beet');
trie.insert('battle');

console.log(JSON.stringify(trie.root.children, null, 2));
console.log(trie.search('beetl'));
