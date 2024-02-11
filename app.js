//Here will be the functionality code for our calculator
//Here we will make the buttons able to add numbers and do calcs with them

//CONSTANTS
const text = document.getElementById('text');
const button1 = document.getElementById('calc1');
const button2 = document.getElementById('calc2');
const button3 = document.getElementById('calc3');
const button4 = document.getElementById('calc4');
const button5 = document.getElementById('calc5');
const button6 = document.getElementById('calc6');

//VARIABLES
let sliderValue = 0;
let slider = document.getElementById("slider");

// Display the default slider value
sliderValue = slider.value;

/*Updates the current slider value (each time you drag the slider handle)
and the buttons background color*/
slider.oninput = function() {
  sliderValue = this.value;
  button1.style.backgroundColor = `hsl(${sliderValue*3.6}, 100%, 50%)`;
  button2.style.backgroundColor = `hsl(${sliderValue*3.6}, 100%, 50%)`;
  button3.style.backgroundColor = `hsl(${sliderValue*3.6}, 100%, 50%)`;
  button4.style.backgroundColor = `hsl(${sliderValue*3.6}, 100%, 50%)`;
  button5.style.backgroundColor = `hsl(${sliderValue*3.6}, 100%, 50%)`;
  button6.style.backgroundColor = `hsl(${sliderValue*3.6}, 100%, 50%)`;
}

//Adds the characters that are tapped into the text input
function addToContainer(character){
    text.value += character;
}

//Calculates the operation in the text input
function calc(){
    try{
        text.value = eval(text.value);
    }
    catch(error){
        text.value = 'Error';
    }
}

//Clears the text input
function clearContainer(){
    text.value = "";
}

/*
function goUp(){
    text.value = results;
}
*/

