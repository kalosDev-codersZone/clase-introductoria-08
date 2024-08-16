const data = [
  { name: "evee", image: "./images/evee.png", type: "normal" },
  { name: "vaporeon", image: "./images/vaporeon.png", type: "aqua" },
  { name: "flareon", image: "./images/flareon.png", type: "fire" },
  { name: "jolteon", image: "./images/jolteon.png", type: "electric" },
  { name: "speon", image: "./images/speon.png", type: "psyquic" },
];

let container = document.getElementById("imageContainer");

function clasificar(typeOfPokemon) {
  const newData = data.filter((item) => {
    return item.type === typeOfPokemon;
  });
  return newData;
}

function print() {
  container.innerHTML = "";
  let inputValue = document.getElementById("inputValue").value;
  let array = clasificar(inputValue);
  for (let i = 0; i < array.length; i++) {
    const img = document.createElement("img");
    const paragraph = document.createElement("h3");
    const type = document.createElement("h4");
    img.src = array[i].image;
    paragraph.textContent = array[i].name;
    type.textContent = array[i].type;
    container.appendChild(img);
    container.appendChild(paragraph);
    container.appendChild(type);
  }
}
