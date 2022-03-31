const Imperial = document.getElementById('imperial');
const Metric = document.getElementById('metric');
const Inches = document.getElementById('imperial-height');
const Pounds = document.getElementById('imperial-weight');
const Centimeters = document.getElementById('metric-height');
const Kilograms = document.getElementById('metric-weight');
/*
text.classList.toggle("hide");
text.classList.toggle("show");

//maybe just use html and css to cover each box respectively???

function Imperial(){
    document.getElementById('imperial').className="show";
  }
*/
//add a while loop?
Imperial.addEventListener('click', (e) => {
        print("Hello World");
    if(Imperial.clicked == true) {
            document.getElementById('Inches').className = "show";
            document.getElementById('Pounds').className = "show";
            document.getElementById('Centimeters').className = "hide";
            document.getElementById('Kilograms').className = "hide";
    } else if (Metric.clicked = true) {   
            Inches.style.display = none;
            Pounds.style.display = none;
            Centimeters.style.display = block;
            Kilograms.style.display = block;
    } else {
            Inches.text.style.display = none;
            Pounds.text.style.display = none;
            Centimeters.text.style.display = none;
            Kilograms.text.style.display = none;
    };
});
  
 

    
