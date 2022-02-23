window.addEventListener("DOMContentLoaded", domLoaded);


function domLoaded() {
   // TODO: Complete the function
   const errorMessage = document.getElementById('errorMessage');
   errorMessage.innerHTML = '';
   const convertButton = document.getElementById('convertButton');
   const celBox = document.getElementById('cInput');
   const farBox = document.getElementById('fInput');
   // const weatherBox = document.getElementById('weatherImage');

   convertButton.addEventListener("click", conversion);
   celBox.addEventListener('input', selectCelBox);
   farBox.addEventListener('input', selectFarBox);


   function selectCelBox() {
      if (farBox.value != '') {
         farBox.value = '';
         // celBox.value = '';
      }
   }

   function selectFarBox() {
      if (celBox.value != '') {
         celBox.value = '';
         // farBox.value = '';
      }
   }

   function conversion() {
      if (celBox.value != "") {
         if (isNaN(parseFloat(celBox.value))){
            errorMessage.innerHTML = celBox.value + ' is not a number';
            celBox.value = '';
         }
         else {
            convertCtoF(parseFloat(celBox.value));
         }
      }
      else if (farBox.value != "") {
         if (isNaN(parseFloat(farBox.value))) {
            errorMessage.innerHTML = farBox.value + ' is not a number';
            farBox.value = '';
         }
         else {
            convertFtoC(farBox.value);
         }
      }
   }
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   const farBox = document.getElementById('fInput');
   const weatherBox = document.getElementById('weatherImage');
   const errorMessage = document.getElementById('errorMessage');

   degreesFahrenheit = (degreesCelsius * (9/5)) + 32;
   farBox.value = degreesFahrenheit;
   if (degreesFahrenheit <= 32) {
      weatherBox.src = "cold.png";
   }
   else if (degreesFahrenheit > 32 && degreesFahrenheit <= 50) {
      weatherBox.src = "cool.png";
   }
   else {
      weatherBox.src = "warm.png";
   }
   errorMessage.innerHTML = '';
   return degreesFahrenheit;
}


function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   const celBox = document.getElementById('cInput');
   const weatherBox = document.getElementById('weatherImage');
   const errorMessage = document.getElementById('errorMessage');

   degreesCelsius = (degreesFahrenheit - 32) * (5/9);
   celBox.value = degreesCelsius;
   if (degreesFahrenheit <= 32) {
      weatherBox.src = "cold.png";
   }
   else if (degreesFahrenheit > 32 && degreesFahrenheit <= 50) {
      weatherBox.src = "cool.png";
   }
   else {
      weatherBox.src = "warm.png";
   }
   errorMessage.innerHTML = '';
   return degreesCelsius;
}
