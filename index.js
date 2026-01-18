const Celsius = document.getElementById(`Celsius`);
const Fahrenheit = document.getElementById(`Fahrenheit`);
const Temp = document.getElementById("inputBox");
const Submit = document.getElementById(`Submit-btn`);
const Result = document.getElementById(`result`);

function toCelsius(temp) {
    return (temp - 32) / 1.8;
}

function toFahrenheit(temp) {
    return (temp * 1.8) + 32;
}

function main(){
    let input = Temp.value.trim();
    if(input === ""){
        Result.style.color = "crimson";
        Result.textContent = "Enter a temperature";
        return;
    }

    input = Number(input);
    if (Number.isNaN(input)) {
        Result.style.color = "crimson";
        Result.textContent = "Invalid number";
        return;
    }

    Result.style.color = "#374375";

    if(Celsius.checked){
        Result.textContent = `Temp: ${parseFloat(toCelsius(input).toFixed(2))} °C`;
    }
    else if(Fahrenheit.checked){
        Result.textContent = `Temp: ${parseFloat(toFahrenheit(input).toFixed(2))} °F`;
    }
    else{
        Result.style.color = "crimson";
        Result.textContent = "Select a unit"
    }
}

Submit.addEventListener("click", main);