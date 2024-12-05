export class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

export class LinkedList {
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

  pop() {
    if (this.head === null) {
      return "The list is empty.";
    } else if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      for (; currentNode.nextNode !== this.tail; ) {
        currentNode = currentNode.nextNode;
      }
      this.tail = currentNode;
      this.tail.nextNode = null;
    }
  }

  contains(value) {
    if (this.head === null) {
      return false;
    } else {
      let currentNode = this.head;
      while (currentNode !== null) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
    }
    return false;
  }

  find(value) {
    if (this.head === null) {
      return null;
    } else {
      let counter = 0;
      for (let currentNode = this.head; currentNode !== null; counter++) {
        if (currentNode.value === value) {
          return counter;
        }
        currentNode = currentNode.nextNode;
      }
      return null;
    }
  }

  toString() {
    if (this.head === null) {
      return "( )";
    } else {
      let string = `( ${this.head.value} )`;
      let currentNode = this.head.nextNode;
      while (currentNode !== null) {
        string += ` -> ( ${currentNode.value} )`;
        currentNode = currentNode.nextNode;
      }
      string += " -> null";
      return string;
    }
  }
}
