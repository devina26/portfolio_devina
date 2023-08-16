function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters
    const bmi = weight / (height * height);

    let interpretation = "";

    if (bmi < 18.5) {
        interpretation = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        interpretation = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        interpretation = "Overweight";
    } else {
        interpretation = "Obese";
    }

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<h3>Your BMI: ${bmi.toFixed(2)} - ${interpretation}</h3>`;
}