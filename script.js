// assign value to the variables 
const myName = "Anshu";
const myIntro = "I am front-end developer"
// access the location for the further use.
const locName = document.getElementById('name');
const locIntro = document.getElementById('intro');
// now putting assign value to the location.
locIntro.textContent= myIntro;
locName.textContent= myName;
// here i learn that i have to tell in where i have to put these value and rather then assign to the location itself.

// now we update the name and intro

// location for the variable
const locUpdatedName= document.getElementById('nameInput');
const locUpdatedinfo= document.getElementById('introInput');
const locUpdatedBtn= document.getElementById('updateBtn');
// adding event lisner to the btn 
locUpdatedBtn.addEventListener('click',function(){
    let name = locUpdatedName.value;
    // create first letter capital and reast small case.
    firstLetterOfTheName = name[0].toUpperCase();
    secondLetterOfTheName = name.slice(1)
    name = firstLetterOfTheName + secondLetterOfTheName;
    let intro = locUpdatedinfo.value;
    // here also we add first letter should be capital
    firstLetterOfTheIntro = intro[0].toUpperCase();
    secondLetterOfTheIntro = intro.slice(1)
    intro = firstLetterOfTheIntro + secondLetterOfTheIntro;
    // place this value in the location of name and info
    locName.textContent = name;
    locIntro.textContent= intro;
    // now i don't need this value in the input type text
    locUpdatedName.value = "";  
    locUpdatedinfo.value = "";  
})
    
/////////////////// now time to impliment Dark Mode ///////////

// first selecte the button of the for the dark mode
const locDarkModeBtn = document.getElementById('darkModeBtn');
// adding listner to the btn
locDarkModeBtn.addEventListener('click', ()=>
{
    ///where to add that class which change color to the btn
    let darkMode = document.querySelector('body');
    // we will add that class to the body itself 
    darkMode.classList.toggle('darkMode');
    
})