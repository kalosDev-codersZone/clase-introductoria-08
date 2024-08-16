class Stack {
  constructor(array) {
    this.array = array;
  }
  add(element) {
    this.array.push(element);
  }
  isEmpty() {
    return this.array.lenght === 0;
  }
  remove() {
    if (this.isEmpty() === true) {
      return "stack is empty";
    }
    return this.array.pop();
  }
}

const firstStack = new Stack([1, 2, 5]);
firstStack.add(8);
console.log(firstStack.remove());
console.log(firstStack);
