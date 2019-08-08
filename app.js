let inputForex = document.querySelector(".value-forex");


function checkInputValue(val) {

    console.log(isNaN(+val + 1));

    /* if (typeof val != number) {
        
    } */

   
}

inputForex.addEventListener("input", function() {
    let inputForexValue = inputForex.value;

    checkInputValue(inputForexValue);

    /* if (checkInputValue(inputForexValue)) {
        console.log(inputForexValue);
    }; */

});




