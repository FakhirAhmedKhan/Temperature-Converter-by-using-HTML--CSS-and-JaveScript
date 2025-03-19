document.addEventListener("DOMContentLoaded", function () {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const kphInput = document.getElementById("kph");
  const mphInput = document.getElementById("mph");
  const mpsInput = document.getElementById("MPS");
  const knInput = document.getElementById("kn");

  // Celsius to Fahrenheit Conversion
  celsiusInput.addEventListener("input", function () {
    let celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
      fahrenheitInput.value = ((celsius * 9) / 5 + 32).toFixed(2);
    } else {
      fahrenheitInput.value = "";
    }
  });

  fahrenheitInput.addEventListener("input", function () {
    let fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
      celsiusInput.value = (((fahrenheit - 32) * 5) / 9).toFixed(2);
    } else {
      celsiusInput.value = "";
    }
  });

  // KPH to MPH Conversion
  kphInput.addEventListener("input", function () {
    let kph = parseFloat(kphInput.value);
    if (!isNaN(kph)) {
      mphInput.value = (kph * 0.621371).toFixed(2);
    } else {
      mphInput.value = "";
    }
  });

  mphInput.addEventListener("input", function () {
    let mph = parseFloat(mphInput.value);
    if (!isNaN(mph)) {
      kphInput.value = (mph / 0.621371).toFixed(2);
    } else {
      kphInput.value = "";
    }
  });

  // MPS to Knots Conversion
  mpsInput.addEventListener("input", function () {
    let mps = parseFloat(mpsInput.value);
    if (!isNaN(mps)) {
      knInput.value = (mps * 1.94384).toFixed(2);
    } else {
      knInput.value = "";
    }
  });

  knInput.addEventListener("input", function () {
    let kn = parseFloat(knInput.value);
    if (!isNaN(kn)) {
      mpsInput.value = (kn / 1.94384).toFixed(2);
    } else {
      mpsInput.value = "";
    }
  });
});