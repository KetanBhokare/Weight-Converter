function convert() {
  // Get the weight in kilograms
  var weightInKilograms = document.getElementById("inputWeight").value;

  // Convert the weight to pounds and ounces
  var weightInPounds = weightInKilograms * 2.20462;
  var weightInOunces = weightInPounds * 16;

  // Display the weight in pounds and ounces
  document.getElementById("output").innerHTML =
    weightInKilograms +
    " kilograms is equal to " +
    weightInPounds.toFixed(2) +
    " pounds (" +
    weightInOunces.toFixed(2) +
    " ounces).";
}
