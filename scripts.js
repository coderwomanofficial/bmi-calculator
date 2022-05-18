const calculateBMI = () => {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  if (height && weight) {
    const bmi = weight / (height / 100) ** 2;
    const bmiResult = bmi.toFixed(2);
    let bmiInformation = '';
    if (bmiResult < 18.5) {
      bmiInformation = 'Your BMI is ' + bmiResult + ', so you are underweight.';
    }

    if (bmiResult >= 18.5 && bmi <= 24.9) {
      bmiInformation =
        'Your BMI is ' + bmiResult + ', so you have a normal weight.';
    }

    if (bmiResult > 24.9) {
      bmiInformation = `Your BMI is ${bmiResult}, so you are overweight.`;
    }

    document.getElementById('result').innerHTML = bmiInformation;
  } else {
    document.getElementById(
      'result'
    ).innerHTML = `Please enter your height and weight`;
  }
};
