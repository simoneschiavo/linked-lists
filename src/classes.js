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

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    if (this.head === null) {
      return "The list is empty.";
    }
    if (index < 0) {
      return "Add an index which is greater than or equal to 0.";
    }
    if (index >= this.size()) {
      return `The list has a total of ${this.size()} nodes. Choose a value between 0 and ${this.size()}.`;
    }
    let currentNode = this.head;
    for (let counter = 0; counter < index; counter++) {
      currentNode = currentNode.nextNode;
    }
    return currentNode;
  }
}
