
document.addEventListener("DOMContentLoaded", function (event) {

    console.log("123");

    const tablaWeight = {
        mercury:0.38,
        venus:0.90,
        earth:1.00,
        moon:0.17,
        mars:0.38,
        jupiter:2.58,
        saturn:1.06,
        uranus:0.90,
        neptune:1.13,
        pluto:0.07,
    };

    console.log(tablaWeight.mercury)

    function myFunction(e) {
        e.stopPropagation();
        e.preventDefault();

        let option1= document.getElementById("planet")
        const planetInfoNperKg = {
            mercury:0.38,
            venus:0.90,
            earth:1.00,
            moon:0.17,
            mars:0.38,
            jupiter:2.58,
            saturn:1.06,
            uranus:0.90,
            neptune:1.13,
            pluto:0.07,
        }
        for( const [key,val] of Object.entries(planetInfoNperKg)){
            let k=key;
            
            let newOption = document.createElement("option");
            newOption.value=k;
            
            option1.add(newOption);
            
        }
        let optionValue = document.getElementById("planet").value;

        
        //planet name
        document.getElementById("plname").innerHTML = optionValue.toUpperCase();
        //la imagen
        document.getElementById("planetImage").src = "./images/" + optionValue + ".png"

        //input
        let inputNum = document.getElementById("mass").value;

  
        if (optionValue  == "--select planet--"){
            document.getElementById("planetImage").src = "./images/earth.png"
        } 
        if (inputNum !== '' && optionValue !== "--select planet--") {
            document.querySelector(".description").classList.add("descriptionVisible")
            document.querySelector(".description").style.display = 'flex'
        } else  {
            document.querySelector(".description").style.display = 'none'
        }

        
        //weight
        let spanWeight = document.getElementById("")
        spanWeight.innerHTML = (inputNum * tablaWeight[optionValue]).toFixed(2)



    };

    let btnSubmit = document.getElementById("button-submit")

    btnSubmit.addEventListener("click", myFunction);





    
});
