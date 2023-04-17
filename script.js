const generateBtn = document.getElementById("generate");
const colorNumberInput = document.getElementById("colors");
const colorPalette = document.querySelector(".color-palette");

function generateRandomColor() {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

function createColorElement(color) {
  const colorDiv = document.createElement("div");
  colorDiv.className = "color";
  colorDiv.style.backgroundColor = color;

  const colorCode = document.createElement("span");
  colorCode.className = "color-code";
  colorCode.textContent = color;

  colorDiv.appendChild(colorCode);
  return colorDiv;
}

function generatePalette() {
  colorPalette.innerHTML = "";
  const numberOfColors = parseInt(colorNumberInput.value);

  for (let i = 0; i < numberOfColors; i++) {
    const color = generateRandomColor();
    const colorElement = createColorElement(color);
    colorPalette.appendChild(colorElement);
  }
}

generateBtn.addEventListener("click", generatePalette);


generatePalette();