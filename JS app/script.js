// script.js
function showInputs() {
  const shape = document.getElementById("shape").value;
  const inputsDiv = document.getElementById("inputs");
  inputsDiv.innerHTML = ""; // Clear previous inputs

  if (shape === "rectangle") {
    inputsDiv.innerHTML = `
      <input type="number" id="width" placeholder="Width">
      <input type="number" id="height" placeholder="Height">
    `;
  } else if (shape === "triangle") {
    inputsDiv.innerHTML = `
      <input type="number" id="base" placeholder="Base">
      <input type="number" id="height" placeholder="Height">
    `;
  } else if (shape === "circle") {
    inputsDiv.innerHTML = `
      <input type="number" id="radius" placeholder="Radius">
    `;
  }
}

function calculateArea() {
  const shape = document.getElementById("shape").value;
  let area = 0;

  if (shape === "rectangle") {
    const width = parseFloat(document.getElementById("width").value);
    const height = parseFloat(document.getElementById("height").value);
    area = width * height;
  } else if (shape === "triangle") {
    const base = parseFloat(document.getElementById("base").value);
    const height = parseFloat(document.getElementById("height").value);
    area = 0.5 * base * height;
  } else if (shape === "circle") {
    const radius = parseFloat(document.getElementById("radius").value);
    area = Math.PI * radius * radius;
  }

  document.getElementById("result").innerText =  "Area = "+area.toFixed(2);
}
