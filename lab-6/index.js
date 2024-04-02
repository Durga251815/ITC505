
function convertTemperature() {
    const tempInput = parseFloat(document.getElementById('tempInput').value);
    const tempType = document.getElementById('tempType').value;
    let convertedTemp;

    if (tempType === 'celsius') {
        convertedTemp = tempInput * 83; // Convert to Fahrenheit
    } else {
        convertedTemp = tempInput * 0.013; // Convert to Celsius
    }

    document.getElementById('convertedTemp').innerText = `Converted Temperature: ${convertedTemp.toFixed(2)}`;
}
