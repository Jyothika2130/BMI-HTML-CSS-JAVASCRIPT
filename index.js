const ageFun = () => {
  try {
    if (age.value == "" || height.value == "" || weight.value == "") {
      result.innerHTML = "Enter valid data";
    } else {
      if (age.value < 2 || age.value > 120) {
        result.innerHTML = "Enter the age in between 2 and 120";
        return;
      }
      if (height.value <= 0 || weight.value <= 0) {
        result.innerHTML = "Enter valid data";
        return;
      }
      const heightInMeters = height.value / 100;
      const bmi = Math.floor(weight.value / (heightInMeters * heightInMeters));
      let category = "";
      if (bmi < 18.5) {
        category = "Underweight";
        
      } else if (bmi < 24.9) {
        category = "Normal weight";
      } else if (bmi < 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }
      result.innerHTML = "your bmi is: " + bmi + " you are in: " + category;
    }
  } catch (error) {
    result.innerHTML= "Enter valid data";
  }
};
const resetFun = () => {
  age.value = "";
  height.value = "";
  weight.value = "";
 result.innerHTML = "result will be here..";
};
 
