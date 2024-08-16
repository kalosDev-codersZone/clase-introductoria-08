class Convert {
  constructor(value, firstUnit, secondUnit) {
    this.value = value;
    this.firstUnit = firstUnit;
    this.secondUnit = secondUnit;
  }
  convertedValue() {
    let inputClass = unitMap[this.firstUnit];
    let instance = new inputClass(this.value, this.firstUnit, this.secondUnit);
    let convertedValue = instance[this.secondUnit]();
    return convertedValue;
  }
}
class Atm extends Convert {
  constructor(value, firstUnit, secondUnit) {
    super(value, firstUnit, secondUnit);
  }
  atm() {
    return this.value;
  }
  kpa() {
    return this.value * 101.325;
  }
  bar() {
    return this.value * 1.0133;
  }
  mmhg() {
    return this.value * 760;
  }
}
class Kpa extends Convert {
  constructor(value, firstUnit, secondUnit) {
    super(value, firstUnit, secondUnit);
  }
  atm() {
    return this.value * 0.0099;
  }
  kpa() {
    return this.value;
  }
  bar() {
    return this.value / 100;
  }
  mmhg() {
    return this.value * 7.5006;
  }
}
class Bar extends Convert {
  constructor(value, firstUnit, secondUnit) {
    super(value, firstUnit, secondUnit);
  }
  atm() {
    return this.value * 0.9869;
  }
  kpa() {
    return this.value * 100;
  }
  bar() {
    return this.value;
  }
  mmhg() {
    return this.value * 750.0617;
  }
}
class Mmhg extends Convert {
  constructor(value, firstUnit, secondUnit) {
    super(value, firstUnit, secondUnit);
  }
  atm() {
    return this.value * 0.9869;
  }
  kpa() {
    return this.value * 100;
  }
  bar() {
    return this.value;
  }
  mmhg() {
    return this.value;
  }
}

const unitMap = {
  atm: Atm,
  kpa: Kpa,
  bar: Bar,
  mmhg: Mmhg,
};

function print() {
  let inputValue = document.getElementById("inputValue").value;
  let inputUnit = document.getElementById("inputUnit").value;
  first.textContent = inputUnit;
  let outputUnit = document.getElementById("outputUnit").value;
  second.textContent = outputUnit;
  let newConvert = new Mmhg(inputValue, inputUnit, outputUnit);
  let result = newConvert.convertedValue();
  document.getElementById("result").value = result;
}
