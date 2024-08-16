class Queue {
  constructor(array) {
    this.array = array;
  }
  add(element) {
    this.array.push(element);
  }
  isEmpty() {
    return this.array.length === 0;
  }
  remove() {
    if (this.isEmpty() === true) {
      return "Queue is empty";
    }
    this.array.shift();
  }
}
const firstQueue = new Queue([2, 6, 8, 8]);
firstQueue.add(7);
firstQueue.remove();
console.log(firstQueue);
