const check_btn= document.getElementById('check-btn');
const user_input=document.getElementById('user-input')
const clearBtn= document.getElementById('clear-btn');
const results_div=document.getElementById('results-div');

const handleInput=()=>{
   !user_input.value
     ? alert("Please provide a phone number")
     : /^(1\s?)?(\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$/.test(user_input.value)
       ? results_div.textContent= `Valid US number: ${user_input.value}`
       : results_div.textContent= `Invalid US number: ${user_input.value}` 
}
const handleClear=()=>{
    results_div.innerHTML='';

}

clearBtn.addEventListener('click',handleClear);
check_btn.addEventListener('click',handleInput);

