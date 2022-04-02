
window.onload = () => {
        let button = document.querySelector(".metric-calculate");

        button.addEventListener("click", calculateMetricBMI);


};

function calculateMetricBMI() {

        let height = parseInt(document.querySelector(".metric-height").value);

        let weight = parseInt(document.querySelector(".metric-weight").value);

        let result = document.querySelector(".metriccalculatorresult");

        if (height === "" || isNaN(height))
                result.innerHTML = "Please enter a numerical height value.";

        else if (weight === "" || isNaN(weight))
                result.innerHTML = "Please enter a numerical weight value.";

        else {
                let bmi = (weight / ((height * height) 
                / 10000)).toFixed(1);


                if (bmi < 18.6) result.innerHTML = 
                        `Underweight(偏瘦): <span>${bmi}</span>`;

                else if (bmi >= 18.6 && bmi < 24.9) result.innerHTML = 
                        `Normal Weight(正常体重): <span>${bmi}</span>`;
                else if (bmi >= 24.9 && bmi < 29.9) result.innerHTML = 
                        `Overweight(偏重): <span>${bmi}</span>`;
                else if (bmi >= 29.9 && bmi < 34.9) result.innerHTML = 
                        `Obesity Class I(轻度肥胖):<span>${bmi}</span>`;
                else if (bmi >= 34.9 && bmi < 39.9) result.innerHTML =
                        `Obesity Class II(中度肥胖):<span>${bmi}</span>`;
                else result.innerHTML = 
                        `Obesity Class III(高度肥胖): <span>${bmi}</span>`;	
                
        }
}