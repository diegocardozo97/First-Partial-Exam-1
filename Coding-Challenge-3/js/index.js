
function fizzNumberProvided() {
    const value = document.getElementsByClassName("fizzBuzzNumber")[0].value;
    const number = parseInt(value);

    if (isNaN(number) || number <= 0) {
        return;
    }
    console.log("is a number");

    const resultSection = document.getElementsByClassName("resultsSection")[0];

    for (let i = 1; i <= number; i++) {
        let elem;
        if (i % 3 == 0 && i % 5 == 0) {
            elem = document.createElement("div");
            elem.innerHTML = "fizzbuzz";
        } else if (i % 3 == 0) {
            elem = document.createElement("div");
            elem.innerHTML = "fizz";
        } else if (i % 5 == 0) {
            elem = document.createElement("div");
            elem.innerHTML = "buzz";
        } else {
            elem = document.createElement("div");
            elem.innerHTML = i.toString();
        }
        resultSection.appendChild(elem);
    }

}