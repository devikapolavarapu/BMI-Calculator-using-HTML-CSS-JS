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