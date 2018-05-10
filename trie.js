class Node {
  constructor(value, children) {
    this.value = value;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new Node();
    this.count = 0;

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

    this.count += 1;
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

trie.insert('bears');
trie.insert('bears');
trie.insert('beets');
trie.insert('battlestar');

let words = 'plop, yes, what, does, this, actually, work'.split(', ')

words.forEach((word) => {
  trie.insert(word);
})

console.log(JSON.stringify(trie.root.children, null, 1));
console.log(trie.count + ' words added');

words.forEach((word) => {
  console.log(word, ' found: ', trie.search(word));
})

console.log('banana found: ', trie.search('banana'));
