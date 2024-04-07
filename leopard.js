fetch("leopard.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        if (!localStorage.getItem("leopardData")) { localStorage.setItem("leopardData", JSON.stringify(data)); }
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("leopardData"));

document.getElementById("lpLn").innerHTML = data.main.Intro;
document.getElementById("lpLnn").innerHTML = data.main.Intro_Description;
document.getElementById("lpVn").innerHTML = data.topicl1;
document.getElementById("lpPl1").innerHTML = data.venues[0].name;
document.getElementById("lpPl1p").innerHTML = data.venues[0].description;
document.getElementById("lpPl2").innerHTML = data.venues[1].name;
document.getElementById("lpPl2p").innerHTML = data.venues[1].description;
document.getElementById("lpPl3").innerHTML = data.venues[2].name;
document.getElementById("lpPl3p").innerHTML = data.venues[2].description;
document.getElementById("lpTr").innerHTML = data.topicl2;
document.getElementById("lpTr1").innerHTML = data.treats[0].name;
document.getElementById("lpTr1p").innerHTML = data.treats[0].description;
document.getElementById("lpTr2").innerHTML = data.treats[1].name;
document.getElementById("lpTr2p").innerHTML = data.treats[1].description;


