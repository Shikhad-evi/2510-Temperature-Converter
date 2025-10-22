// Function to convert Fahrenheit to Celsius
function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to describe temperature based on Celsius
function describeTemperature(fahrenheit) {
    const celsius = convertToCelsius(fahrenheit);
    
    if (celsius < 0) {
        return "very cold";
    } else if (celsius < 20) {
        return "cold";
    } else if (celsius < 30) {
        return "warm";
    } else if (celsius < 40) {
        return "hot";
    } else {
        return "very hot";
    }
}

// Main program
function main() {
    // Prompt user for temperature in Fahrenheit
    const fahrenheitInput = prompt("Please enter a temperature in Fahrenheit:");
    
    // Convert input to number
    const fahrenheit = parseFloat(fahrenheitInput);
    
    // Check if input is valid
    if (isNaN(fahrenheit)) {
        alert("Please enter a valid number for temperature.");
        return;
    }
    
    // Convert to Celsius
    const celsius = convertToCelsius(fahrenheit);
    
    // Get temperature description
    const description = describeTemperature(fahrenheit);
    
    // Display result to user
    alert(`${fahrenheit}°F is ${celsius.toFixed(1)}°C, which feels ${description}.`);
}

// Run the program
main();