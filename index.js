// we marking variable as a const we have two variable (celsius) or (fahrenheit).
const Celsius = document.querySelector("#celsius");
Fahrenheit = document.querySelector("#fahrenheit");

// we are adding window EventListener or arrow function.
window.addEventListener("load", () => celsius.focus());

// we are converting  Fahrenheit into celsius.
celsius.addEventListener("input", () => {
  Fahrenheit.value = ((celsius.value * 9) / 5 + 32).toFixed(2);
  //Handling the error by using zero value.
  if (!celsius.value) fahrenheit.value = "";
});

// we are converting celsius into Fahrenheit.
fahrenheit.addEventListener("input", () => {
  celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
  //Handling the error by using zero value.
  if (!fahrenheit.value) celsius.value = "";
});
