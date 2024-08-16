let container = document.getElementById("imageContainer");
class Stack {
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
      return "Stack is empty";
    }
    this.array.pop();
  }
  size() {
    return this.array.length;
  }
  show() {
    for (let i = 0; i < this.array.length; i++) {
      const img = document.createElement("img");
      img.src = this.array[i];
      container.appendChild(img);
    }
  }
}

const imageStack = new Stack([
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/135.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png",
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/196.png",
]);

function showNextImage() {
  container.innerHTML = "";
  if (imageStack.isEmpty() === true) {
    imageStack.add(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png"
    );
    imageStack.add(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/135.png"
    );
    imageStack.add(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png"
    );
    imageStack.add(
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/196.png"
    );
  } else {
    imageStack.show();
    imageStack.remove();
  }
  setTimeout(showNextImage, 3000);
}
showNextImage();
