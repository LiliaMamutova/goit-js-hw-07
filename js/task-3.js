const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

function handleInput(event) {
    const inputTrimValue = event.target.value.trim();

    if(inputTrimValue === "") {
        outputElement.textContent = "Anonymous";
    } else {
        outputElement.textContent = inputTrimValue;
    }
}

inputElement.addEventListener("input", handleInput);
