const inicialUnit = window.prompt("Escolha a unidade de temperatura inicial(Celsius, fahrenheit, kelvin): ");

if(inicialUnit.toLowerCase() === "celsius" || inicialUnit.toLowerCase() === "fahrenheit" || inicialUnit.toLowerCase() == "kelvin") {

    const value = parseFloat(window.prompt("Coloque o valor em " + inicialUnit.toLowerCase() + ": "));
    let value2, value3;

    switch(inicialUnit.toLowerCase()) {
        case "celsius":
            value2 = value*5/9 + 32; // Fahrenheit
            value3 = value + 273; // Kelvin
            window.alert("Temperatura em Fahrenheit: " + value2 + "; Em Kelvin: " + value3);
            break;
        case "fahrenheit":
            value2 = (value-32)*9/5; // Celsius
            value3 = value2 + 273; // Kelvin
            window.alert("Temperatura em Celsius: " + value2 + "; Em Kelvin: " + value3);
            break;
        case "kelvin":
            value2 = value - 273; // Celsius
            value3 = value2*5/9 + 32; // Fahrenheit
            window.alert("Temperatura em Celsius: " + value2 + "; Temperatura em Fahrenheit: " + value3);
            break;
    }
}
else {
    window.alert("É impossível fazer uma conversão.");
}