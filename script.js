let decrement = document.getElementById("decrementbutton");
let increment = document.getElementById("incrementbutton");
let reset = document.getElementById("resetbutton");
let value = document.getElementById("value");


// DECREMENT

decrement.addEventListener("click",decrementFunction);

function decrementFunction(){
     valueNum1 = Number(value.innerText);
       if(value.innerText > 0){
        value.innerText = valueNum1 - 1;
       }
  }


//   INCREMENT 

increment.addEventListener("click", () => {

    let valueNum2 = Number(value.innerText);
    value.innerText = valueNum2 + 1;
})

// RESET 

reset.addEventListener("click", () => {
    value.innerText = 0;
})