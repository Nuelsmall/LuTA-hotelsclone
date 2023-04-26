// "use strict"

const dropDown = document.querySelector("#supportDropdownButton");
const currencyDrop = document.querySelector(".currency");
const currencyDropdown = document.querySelector("#currency-drop");
const dropElem = document.querySelector(".dropdown-menu");
const accountElem = document.querySelector(".account");
const accountDropdown = document.querySelector(".account-dropdown-menu");
const unlockPopup = document.getElementById('unlock');
const subbtnEnable = document.querySelector('.btnSubscribe');
const SubInput = document.querySelector('.emailInput');


// dropdown/filter functionality
dropDown.addEventListener("click", () => {
  currencyDropdown.classList.remove("showCurrencyDropdown");
  accountDropdown.classList.remove("showAccount");
  dropElem.classList.toggle("showDropdown");
  console.log("Hello");
});
currencyDrop.addEventListener("click", () => {
  dropElem.classList.remove("showDropdown");
  accountDropdown.classList.remove("showAccount");
  currencyDropdown.classList.toggle("showCurrencyDropdown");
  console.log("Hello");
});
accountElem.addEventListener("click", () => {
  dropElem.classList.remove("showDropdown");
  currencyDropdown.classList.remove("showCurrencyDropdown");
  accountDropdown.classList.toggle("showAccount");
  console.log("Hello");
});

// code to display successful unlock prompt
function showUnlockPopup(){
  unlockPopup.classList.add("show-popup");
}

function closeUnlockPopup(){
  unlockPopup.classList.remove("show-popup");
}

const form = document.getElementById('form')

// form.addEventListener('submit',function(event){
//   event.preventDefault() //prevent the form from autosubmitting
// })

// code to display successful login prompt
const LoginPopup = document.getElementById('pop');

function openPopup(){
  LoginPopup.classList.add("open-popup");
}
function closePopup(){
  LoginPopup.classList.remove("open-popup");
}
// code to disbaled and enabled sign in button when fills are empty
// const input = document.querySelector('input')
// const btn = document.querySelector('.btn')

//   if (input.value.length > 0) {
//     btn.removeAttribute("disabled");
//   } else {
//     btn.setAttribute('disabled', 'disabled');
//   };


// code to display successful subscribe prompt



const subscribePop = document.getElementById('subcribe');

function subscribeOpenPopup(){
  subscribePop.classList.add("open-popup");
}

function subscribeClosePopup(){
  subscribePop.classList.remove("open-popup");
}
