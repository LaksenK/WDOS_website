fetch("animal.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        localStorage.setItem("animalData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("animalData"));

document.getElementById("anmI1").innerHTML = data.main.Intro;
document.getElementById("anmI2").innerHTML = data.main.Intro_Description;
document.getElementById("anmI3").innerHTML = data.main.IntroP;
document.getElementById("anmT").innerHTML = data.main.IntroP2;
document.getElementById("anmN1").innerHTML = data.animals[0].name;
document.getElementById("anmS1").innerHTML = data.animals[0].sname;
document.getElementById("anmP1").innerHTML = data.animals[0].description;
document.getElementById("anmN2").innerHTML = data.animals[1].name;
document.getElementById("anmS2").innerHTML = data.animals[1].sname;
document.getElementById("anmP2").innerHTML = data.animals[1].description;
document.getElementById("anmN3").innerHTML = data.animals[2].name;
document.getElementById("anmS3").innerHTML = data.animals[2].sname;
document.getElementById("anmP3").innerHTML = data.animals[2].description;
document.getElementById("anmN4").innerHTML = data.animals[3].name;
document.getElementById("anmS4").innerHTML = data.animals[3].sname;
document.getElementById("anmP4").innerHTML = data.animals[3].description;
document.getElementById("anmN5").innerHTML = data.animals[4].name;
document.getElementById("anmS5").innerHTML = data.animals[4].sname;
document.getElementById("anmP5").innerHTML = data.animals[4].description;
document.getElementById("anmN6").innerHTML = data.animals[5].name;
document.getElementById("anmS6").innerHTML = data.animals[5].sname;
document.getElementById("anmP6").innerHTML = data.animals[5].description;
document.getElementById("anmN7").innerHTML = data.animals[6].name;
document.getElementById("anmS7").innerHTML = data.animals[6].sname;
document.getElementById("anmP7").innerHTML = data.animals[6].description;

