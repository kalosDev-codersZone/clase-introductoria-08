const firstSet = new Set([2, 4, 5, 4]);
firstSet.add(7);
firstSet.delete(5);
console.log(firstSet.size);
console.log(firstSet.has(9));
firstSet.forEach((item) => {
  console.log(item);
});
console.log(firstSet);
