/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const meterInput = document.getElementById("meter") as HTMLInputElement;
const outputDiv = document.getElementById("output") as HTMLDivElement;

meterInput.addEventListener("input", () => {
  const meters = parseFloat(meterInput.value);

  outputDiv.innerHTML = "";

  if (isNaN(meters)) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Please enter a valid number.";
    outputDiv.appendChild(errorMessage);
    return;
  }

  const centimeters = meters * 100;
  const inches = meters * 39.37;
  const feet = meters * 3.281;
  const miles = meters / 1609;
  const yards = meters * 1.094;

  const resultTitle = document.createElement("p");
  resultTitle.textContent = `${meters} meters is equivalent to:`;
  outputDiv.appendChild(resultTitle);

  const resultList = document.createElement("ul");

  const centimetersItem = document.createElement("li");
  centimetersItem.textContent = `${centimeters.toFixed(2)} centimeters (cm)`;
  resultList.appendChild(centimetersItem);

  const inchesItem = document.createElement("li");
  inchesItem.textContent = `${inches.toFixed(2)} inches (in)`;
  resultList.appendChild(inchesItem);

  const feetItem = document.createElement("li");
  feetItem.textContent = `${feet.toFixed(2)} feet (ft)`;
  resultList.appendChild(feetItem);

  const milesItem = document.createElement("li");
  milesItem.textContent = `${miles.toFixed(6)} miles (mi)`;
  resultList.appendChild(milesItem);

  const yardsItem = document.createElement("li");
  yardsItem.textContent = `${yards.toFixed(2)} yards (yd)`;
  resultList.appendChild(yardsItem);

  outputDiv.appendChild(resultList);
});
