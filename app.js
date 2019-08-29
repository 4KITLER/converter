let data = {
    USD: {
        RUB: 66.53,
        EUR: 0.9,
        GBR: 0.82,
        CNY: 7.16,
        USD: 0,
    },
    RUB: {
        USD: 0.015,
        GBR: 0.012,
        EUR: 0.014,
        CNY: 0.11,
        RUB: 0,
    },
    EUR: {
        RUB: 73.5,
        USD: 1.11,
        GBR: 0.91,
        CNY: 7.91,
        EUR: 0,
    },
    GBR: {
        RUB: 81.21,
        USD: 1.22,
        EUR: 1.1,
        CNY: 8.76,
        GBR: 0,
    },
    CNY: {
        RUB: 9.27,
        USD: 0.14,
        EUR: 0.13,
        GBR: 0.11,
        CNY: 0,
    },
};

let inputForex = document.querySelector(".value-forex");
let selectFrom = document.querySelector(".from-forex");
let selectTo = document.querySelector(".to-forex");
let equalVal = document.querySelector(".equal-forex ");

inputForex.addEventListener("input", reСalculate);
selectFrom.addEventListener("input", reСalculate);
selectTo.addEventListener("input", reСalculate);

function reСalculate() {
    let calculate = inputForex.value * data[selectFrom.value][selectTo.value];
    equalVal.innerHTML = calculate;
}






