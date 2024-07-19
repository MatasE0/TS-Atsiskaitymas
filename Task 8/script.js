/* ------------------------------ TASK 8 ----------------------------
Parašykite TS kodą, kuris leis vartotojui įvesti ilgį metrais ir pamatyti jo pateikto ilgio konvertavimą į:
1. Centimetrus (cm) | Formulė: cm = m * 100
2. Colius (in) | Formulė: in = m * 39.37
3. Pėdas (ft) | Formulė: ft = m * 3.281
4. Mylias (mi) | Formulė: mi = m / 1609
5. Jardus (yd) | Formulė: yd = m * 1.094

Pastaba: Atvaizdavimas turi būti matomas su kiekviena įvestimi ir pateikiamas <div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
var meterInput = document.getElementById("meter");
var outputDiv = document.getElementById("output");
meterInput.addEventListener("input", function () {
    var meters = parseFloat(meterInput.value);
    outputDiv.innerHTML = "";
    if (isNaN(meters)) {
        var errorMessage = document.createElement("p");
        errorMessage.textContent = "Please enter a valid number.";
        outputDiv.appendChild(errorMessage);
        return;
    }
    var centimeters = meters * 100;
    var inches = meters * 39.37;
    var feet = meters * 3.281;
    var miles = meters / 1609;
    var yards = meters * 1.094;
    var resultTitle = document.createElement("p");
    resultTitle.textContent = "".concat(meters, " meters is equivalent to:");
    outputDiv.appendChild(resultTitle);
    var resultList = document.createElement("ul");
    var centimetersItem = document.createElement("li");
    centimetersItem.textContent = "".concat(centimeters.toFixed(2), " centimeters (cm)");
    resultList.appendChild(centimetersItem);
    var inchesItem = document.createElement("li");
    inchesItem.textContent = "".concat(inches.toFixed(2), " inches (in)");
    resultList.appendChild(inchesItem);
    var feetItem = document.createElement("li");
    feetItem.textContent = "".concat(feet.toFixed(2), " feet (ft)");
    resultList.appendChild(feetItem);
    var milesItem = document.createElement("li");
    milesItem.textContent = "".concat(miles.toFixed(6), " miles (mi)");
    resultList.appendChild(milesItem);
    var yardsItem = document.createElement("li");
    yardsItem.textContent = "".concat(yards.toFixed(2), " yards (yd)");
    resultList.appendChild(yardsItem);
    outputDiv.appendChild(resultList);
});
