# BMI-Calculator-using-HTML-CSS-JS
BMI(Body Mass Index) is a calculation for a person's weight and height which determines the condition of the person whether he/she is underweight or normal or obese.

1. Setup Your Project
Create a new folder named bmi-calculator
Open VS Code and go to:
File > Open Folder (select your new folder)
Create 3 files in the folder:
index.html
style.css
script.js

2. HTML Structure (index.html):

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BMI Calculator</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="calculator">
        <h1>BMI Calculator</h1>
        <div class="input-group">
            <label for="height">Height (cm):</label>
            <input type="number" id="height" placeholder="e.g. 170">
        </div>
        <div class="input-group">
            <label for="weight">Weight (kg):</label>
            <input type="number" id="weight" placeholder="e.g. 65">
        </div>
        <button id="calculate">Calculate BMI</button>
        <div id="result"></div>
        <div class="bmi-scale">
            <h3>BMI Categories:</h3>
            <ul>
                <li>Underweight: &lt; 18.5</li>
                <li>Normal: 18.5 - 24.9</li>
                <li>Overweight: 25 - 29.9</li>
                <li>Obese: ≥ 30</li>
            </ul>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

3. CSS Styling (style.css):

body {
    font-family: 'Arial', sans-serif;
    background-color: #f0f8ff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}
.calculator {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}
h1 {
    color: #2c3e50;
    margin-bottom: 20px;
}
.input-group {
    margin-bottom: 15px;
    text-align: left;
}
label {
    display: block;
    margin-bottom: 5px;
    color: #34495e;
    font-weight: bold;
}
input {
    width: 100%;
    padding: 10px;
    border: 1px solid #bdc3c7;
    border-radius: 5px;
    font-size: 16px;
}
button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    width: 100%;
    margin-top: 10px;
    transition: background-color 0.3s;
}
button:hover {
    background-color: #2980b9;
}
#result {
    margin-top: 20px;
    font-size: 18px;
    font-weight: bold;
    min-height: 30px;
}
.bmi-scale {
    margin-top: 25px;
    padding-top: 15px;
    border-top: 1px dashed #bdc3c7;
}
.bmi-scale h3 {
    color: #2c3e50;
    margin-bottom: 10px;
}
.bmi-scale ul {
    list-style-type: none;
    padding: 0;
    text-align: left;
}
.bmi-scale li {
    margin-bottom: 5px;
    color: #7f8c8d;
}

4. JavaScript Logic (script.js):

document.getElementById('calculate').addEventListener('click', function() {
    // Get input values
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    const weight = parseFloat(document.getElementById('weight').value);
    // Validate inputs
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById('result').innerHTML = 
            '<span style="color: red;">Please enter valid height and weight!</span>';
        return;
    }
    // Calculate BMI
    const bmi = weight / (height * height);
    // Display result with category
    let category;
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi < 25) {
        category = 'Normal';
    } else if (bmi < 30) {
        category = 'Overweight';
    } else {
        category = 'Obese';
    }
    document.getElementById('result').innerHTML = `
        Your BMI: <span style="color: #3498db;">${bmi.toFixed(1)}</span><br>
        Category: <span style="font-weight: bold;">${category}</span>
    `;
});

5. Run Your Project
In VS Code, right-click on index.html
Select "Open with Live Server" (install the extension if prompted)
Your default browser will open the calculator
