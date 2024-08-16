const firstArray = [2, 6, 8, 9];
console.log(firstArray.push(3));
console.log(firstArray.unshift(4));
console.log(firstArray.pop());
console.log(firstArray.shift());
console.log(firstArray);
firstArray.splice(2, 2, 3, 4, 7, 0);
console.log(firstArray);
const second = firstArray.filter((item) => {
  return item !== 3;
});
console.log(second);
console.log(firstArray);
