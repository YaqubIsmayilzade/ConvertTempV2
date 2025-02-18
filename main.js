const input = document.getElementById("text");
const output = document.getElementById("output");

let fromVar = "Celcius";
const fromDiv = document.getElementById("from");
const fromButton = document.getElementById("fromButton");
const fromText = document.getElementById("fromText");
const fromFlip = document.getElementById("fromFlip");
let k = 0;
let l = 0;

const toDiv = document.getElementById("to");
const toButton = document.getElementById("toButton");
const toText = document.getElementById("toText");
const toFlip = document.getElementById("toFlip");
let toVar = "Fahrenheit";

function fromDropDown() {
  if (k == 0) {
    fromDiv.style.display = "block";
    fromFlip.style.rotate = "180deg";
    toFlip.style.rotate = "0deg";
    toDiv.style.display = "none";
    k = 1;
    l = 0;
  } else if (k == 1) {
    fromDiv.style.display = "none";
    fromFlip.style.rotate = "0deg";
    toDiv.style.display = "none";
    k = 0;
    l = 0;
  }
}

function toDropDown() {
  if (l == 0) {
    toDiv.style.display = "block";
    toFlip.style.rotate = "180deg";
    fromFlip.style.rotate = "0deg";
    fromDiv.style.display = "none";
    l = 1;
    k = 0;
  } else if (l == 1) {
    toDiv.style.display = "none";
    toFlip.style.rotate = "0deg";
    fromDiv.style.display = "none";
    l = 0;
  }
}

function Celcius(divHide, select, text, flip) {
  divHide.style.display = "none";
  if (select == "from") {
    fromVar = "Celcius";
  } else {
    toVar = "Celcius";
  }
  text.textContent = "Celcius";

  flip.style.rotate = "0deg";
  toFlip.style.rotate = "0deg";
  fromFlip.style.rotate = "0deg";

  output.textContent = convert(fromVar, toVar, input.value);
  k = 0;
  l = 0;
}

function Fahrenheit(divHide, select, text, flip) {
  divHide.style.display = "none";
  if (select === "from") {
    fromVar = "Fahrenheit";
  }
  if (select === "to") {
    toVar = "Fahrenheit";
  }
  text.textContent = "Fahrenheit";
  flip.style.rotate = "0deg";
  toFlip.style.rotate = "0deg";
  fromFlip.style.rotate = "0deg";
  output.textContent = convert(fromVar, toVar, input.value);

  k = 0;
  l = 0;
}

function Kelvin(divHide, select, text, flip) {
  divHide.style.display = "none";

  if (select === "from") {
    fromVar = "Kelvin";
  }
  if (select === "to") {
    toVar = "Kelvin";
  }

  text.textContent = "Kelvin";
  flip.style.rotate = "0deg";
  toFlip.style.rotate = "0deg";
  fromFlip.style.rotate = "0deg";

  output.textContent = convert(fromVar, toVar, input.value);

  k = 0;
  l = 0;
}

input.addEventListener("input", () => {
  output.textContent = convert(fromVar, toVar, input.value);
});

function convert(from, to, input) {
  if (input != "") {
    console.log(from, to, input);
    if (from == "Celcius" && to == "Fahrenheit") {
      return ((input * 9) / 5 + 32).toFixed(2);
    } else if (from == "Celcius" && to == "Kelvin") {
      return input + 273.15;
    } else if (from == "Fahrenheit" && to == "Celcius") {
      return (((input - 32) * 5) / 9).toFixed(2);
    } else if (from == "Fahrenheit" && to == "Kelvin") {
      return (((input - 32) * 5) / 9 + 273.15).toFixed(2);
    } else if (from == "Kelvin" && to == "Celcius") {
      return input - 273.15;
    } else if (from == "Kelvin" && to == "Fahrenheit") {
      return (((input - 273.15) * 9) / 5 + 32).toFixed(2);
    } else if (from == to) {
      return input;
    }
  } else if (input == "") {
    return "0";
  }
}
