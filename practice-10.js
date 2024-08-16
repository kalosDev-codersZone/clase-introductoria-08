const datos = [
  { name: "evee", image: "./images/evee.png", type: "normal" },
  { name: "vaporeon", image: "./images/vaporeon.png", type: "aqua" },
  { name: "flareon", image: "./images/flareon.png", type: "fire" },
  { name: "jolteon", image: "./images/jolteon.png", type: "electric" },
  { name: "speon", image: "./images/speon.png", type: "psyquic" },
];

let container = document.getElementById("imageContainer");

class List {
  constructor(data) {
    this.data = data;
  }
  show() {
    return this.data;
  }
}

class Classify extends List {
  constructor(typeOfPokemon, data) {
    super(data);
    this.typeOfPokemon = typeOfPokemon;
  }
  show() {
    if (this.typeOfPokemon !== "all") {
      let typeOfPoke = unitMap[this.typeOfPokemon];
      let type = new typeOfPoke();
      type.render();
      const newData = this.data.filter((item) => {
        return item.type === this.typeOfPokemon;
      });
      return newData;
    } else {
      return this.data;
    }
  }
}

class Fire extends Classify {
  render() {
    container.style.backgroundColor = "red";
  }
}
class Aqua extends Classify {
  render() {
    container.style.backgroundColor = "blue";
  }
}
class Psyquic extends Classify {
  render() {
    container.style.backgroundColor = "pink";
  }
}
class Electric extends Classify {
  render() {
    container.style.backgroundColor = "yellow";
  }
}
class Normal extends Classify {
  render() {
    container.style.backgroundColor = "brown";
  }
}

const unitMap = {
  fire: Fire,
  aqua: Aqua,
  electric: Electric,
  psyquic: Psyquic,
  normal: Normal,
};

function print() {
  container.innerHTML = "";
  container.style.backgroundColor = "white";
  let inputValue = document.getElementById("inputValue").value;
  let array = new Fire(inputValue, datos);
  let newArray = array.show();
  for (let i = 0; i < newArray.length; i++) {
    const img = document.createElement("img");
    const paragraph = document.createElement("h3");
    const type = document.createElement("h4");
    img.src = newArray[i].image;
    paragraph.textContent = newArray[i].name;
    type.textContent = newArray[i].type;
    container.appendChild(img);
    container.appendChild(paragraph);
    container.appendChild(type);
  }
}
