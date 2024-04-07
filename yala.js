fetch("yal.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        if (!localStorage.getItem("yalaData")) { localStorage.setItem("yalaData", JSON.stringify(data)); }
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("yalaData"));

document.getElementById("ylT1").innerHTML = data.topic;
document.getElementById("ylT2").innerHTML = data.subtopics[0].topic;
document.getElementById("ylP1").innerHTML = data.subtopics[0].paragraph;
document.getElementById("ylL1").innerHTML = data.subtopics[0].officialwebsite.paragraph;
document.getElementById("ylT3").innerHTML = data.subtopics[1].topic;
document.getElementById("ylP2").innerHTML = data.subtopics[1].paragraph;
document.getElementById("ylT4").innerHTML = data.subtopics[2].topic;
document.getElementById("ylP3").innerHTML = data.subtopics[2].paragraph;
document.getElementById("ylL2").innerHTML = data.subtopics[2].officialwebsite.paragraph;