

let selectPlanet= document.getElementById("planet")

const planetInfoNperKg = {
    'mercury':0.38,
    'venus':0.90,
    'earth':1.00,
    'moon':0.17,
    'mars':0.38,
    'jupiter':2.58,
    'saturn':1.06,
    'uranus':0.90,
    'neptune':1.13,
    'pluto':0.07,
    'empty':1.00
}

for( const [key,val] of Object.entries(planetInfoNperKg)){
    let k=key;
    let newOption = document.createElement("option");
    newOption.value=k;
    newOption.text=k.toString().toUpperCase();
    
    selectPlanet.add(newOption,null);
    
}

document.addEventListener("DOMContentLoaded", function (event) {

    function changePic(e){
        let img= document.getElementById("planetImage");
        let name= document.getElementById("plname");
        let optionValue = document.getElementById("planet").value;
        if (optionValue  == "--select planet--"){
            optionValue='earth'
        }
        
        img.src= `./images/${optionValue}.png`;
        name.innerHTML= optionValue.toUpperCase();

        

    }
    function calcForce(e){
        let inputNum = document.getElementById("mass").value;
        let optionValue = document.getElementById("planet").value;
        let multiplier= planetInfoNperKg[optionValue];
        console.log(multiplier)

        if (inputNum !== '' && optionValue !== "--select planet--") {
            document.querySelector(".description").classList.add("descriptionVisible")
            document.querySelector(".description").style.display = 'flex'
        } else  {
            document.querySelector(".description").style.display = 'none'
        }

        let spanWeight = document.getElementById("plvalue")
        spanWeight.innerHTML = (inputNum * planetInfoNperKg[optionValue]).toFixed(2)

    }

    let btnSubmit = document.getElementById("button-submit")
    let setOptionValue= document.getElementById("planet");
    btnSubmit.addEventListener("click", changePic);
    btnSubmit.addEventListener("click",calcForce);
    setOptionValue.addEventListener("change", changePic);
    setOptionValue.addEventListener("change", calcForce);

    
});
