const calculateBMI = () => {
  const height = document.getElementById('height').value;
  const weight = document.getElementById('weight').value;
  if (height && weight) {
    const bmi = weight / (height / 100) ** 2;
    const bmiResult = bmi.toFixed(2);
    document.getElementById('result').innerHTML = `Your BMI is ${bmiResult}`;
  } else {
    document.getElementById(
      'result'
    ).innerHTML = `Please enter your height and weight`;
  }
};
