window.addEventListener("DOMContentLoaded", domLoaded);


function domLoaded() {
   // TODO: Complete the function
   let userInput;
   // const p = document.createTextNode('Hello');
   const errorMessage = document.getElementById('errorMessage');
   // errorMessage.appendChild(p)
   errorMessage.innerHTML += "";
   const convertButton = document.getElementById('convertButton');
   const celBox = document.getElementById('cInput');
   const farBox = document.getElementById('fInput');

   // celBox.addEventListener('click', selectCelBox);
   // farBox.addEventListener('click', selectFarBox);
   // celBox.addEventListener('click', selectBox('cel'));
   // farBox.addEventListener('click', selectBox('far'));

   // if (!(celBox.value != "" && farBox.value != "") && (celBox.value != "" || farBox.value != "") == true) {
   //    convertButton.addEventListener("click", conversion);
   // }
   if ((celBox.value == "" && farBox.value == "") || (celBox.value != "" && farBox.value != "") == false) {
      convertButton.addEventListener("click", conversion);
   }
   else {
      celBox.addEventListener('click', selectCelBox);
      farBox.addEventListener('click', selectFarBox);
   }
   


   // celBox.value = 'This should not exist';
   // celBox.addEventListener('select', selectCelBox());
   // farBox.addEventListener('select', selectFarBox());
   
   // let bool = false;
   // while (bool == false) {
   //    if (convertButton.addEventListener("click", conversion))
   //    celBox.addEventListener('focus', selectCelBox());
   //    farBox.addEventListener('focus', selectFarBox());
   // }

   // function selectBox(box) {
   //    if (box == 'cel') {
   //       farBox.value = '';
   //    }
   //    else if (box == 'far') {
   //       celBox.value = '';
   //    }
   // }

   function selectCelBox() {
      if (farBox.value != '') {
         farBox.value = '';
      }
      return farBox.value;
      // farBox.value = '';
      // celBox.value = null;
   }

   function selectFarBox() {
      if (celBox.value != '') {
         celBox.value = '';
      }
      return celBox.value;
      // farBox.value = null;
      // celBox.value = '';
   }

   function conversion() {
      // bool = true;
      // userInput = "";
      if (celBox.value != "") {
         // userInput = parseFloat(celBox.value);
         // console.log(userInput)
         if (parseFloat(celBox.value) == NaN){
            // text = 
            console.log("This is here")
            errorMessage.innerHTML += celBox + ' is not a number';
            celBox.value = '';
         }
         else {
            convertCtoF(userInput);
         }
      }
      else if (farBox.value != "") {
         userInput = parseFloat(farBox.value);
         if (userInput == NaN) {
            errorMessage.innerHTML += farBox + ' is not a number';
            farBox.value = '';
         }
         else {
            convertFtoC(userInput);
         }
      }
      // }
      // domLoaded()
   }

   // convertButton.addEventListener("click", conversion);
   // domLoaded()
}

function convertCtoF(degreesCelsius) {
   // TODO: Complete the function
   const farBox = document.getElementById('fInput');
   const weatherBox = document.getElementById('weatherImage');

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
   // farBox.addEventListener
}


function convertFtoC(degreesFahrenheit) {
   // TODO: Complete the function
   const celBox = document.getElementById('cInput');
   const weatherBox = document.getElementById('weatherImage');

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
}
