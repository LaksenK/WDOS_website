fetch("wilpattu.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        localStorage.setItem("wilpattuData", JSON.stringify(data));
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("wilpattuData"));

document.getElementById("wlT1").innerHTML = data.topic;
document.getElementById("wlT2").innerHTML = data.subtopics[0].topic;
document.getElementById("wlP1").innerHTML = data.subtopics[0].paragraph;
document.getElementById("wlL1").innerHTML = data.subtopics[0].officialwebsite.paragraph;
document.getElementById("wlT3").innerHTML = data.subtopics[1].topic;
document.getElementById("wlP2").innerHTML = data.subtopics[1].paragraph;
document.getElementById("wlT4").innerHTML = data.subtopics[2].topic;
document.getElementById("wlP3").innerHTML = data.subtopics[2].paragraph;
document.getElementById("wlL2").innerHTML = data.subtopics[2].officialwebsite.paragraph;