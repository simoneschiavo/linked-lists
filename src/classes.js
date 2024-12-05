class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      this.tail = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      this.head = newNode;
      this.head.nextNode = oldHead;
    }
  }

  size() {
    let numberOfNodes = 0;
    if (this.head === null) {
      return numberOfNodes;
    } else {
      for (let currentNode = this.head; currentNode !== null; numberOfNodes++) {
        currentNode = currentNode.nextNode;
      }
      return numberOfNodes;
    }
  }
}
