
// FizzBuzz Start

let elForm = document.querySelector(".form");
let elFormInputOne = document.querySelector(".form-inputOne");
let elFormInputTwo = document.querySelector(".form-inputTwo");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    if (elFormInputOne.value % 3 ===  0 && elFormInputOne.value % 5 === 0) {
        let result = "FizzBuzz";
        elFormInputTwo.setAttribute("Placeholder", result);
    }else if (elFormInputOne.value % 5  === 0){
        let inputOneResult = "Buzz"
        elFormInputTwo.setAttribute("Placeholder", inputOneResult);

    }else if (elFormInputOne.value % 3 === 0){
        let inputTwoResult = "Fizz"
        elFormInputTwo.setAttribute("Placeholder", inputTwoResult);

    }else{
        elFormInputTwo.setAttribute("Placeholder", elFormInputOne.value);
    }
    elFormInputOne.value= "";

});

// FizzBuzz End

let  a;
var  b;

console.log(a);
console.log(b);