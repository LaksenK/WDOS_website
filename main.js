//idex.html page
//fetch JSON data
fetch("index.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        // document.getElementById("maini").innerHTML= data.main.Intro;
        if (!localStorage.getItem("homeData")) { localStorage.setItem("homeData", JSON.stringify(data)); }
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("homeData"));

//
document.getElementById("maini").innerHTML = data.main.Intro;
document.getElementById("mainip").innerHTML = data.main.Intro_Description;
document.getElementById("subtopic").innerHTML = data.section1.maint;
document.getElementById("submt").innerHTML = data.section1.title;
document.getElementById("subtp1").innerHTML = data.section1.description;
document.getElementById("submt1").innerHTML = data.section1.description2;
document.getElementById("submt2").innerHTML = data.section2.title;
document.getElementById("subtp2").innerHTML = data.section2.description;
document.getElementById("submt3").innerHTML = data.section2.description2;
document.getElementById("submt4").innerHTML = data.section3.title;
document.getElementById("submt5").innerHTML = data.section3.description;
document.getElementById("submt6").innerHTML = data.section3.description2;


data.section1.examples.forEach((parkName) => {
    const parkList = document.getElementById("parklist");
    const listItem = document.createElement("li");

    listItem.textContent = parkName;
    parkList.appendChild(listItem);
});
data.section2.examples.forEach((animalName) => {
    const animalList = document.getElementById("animallist");
    const listItem = document.createElement("li");

    listItem.textContent = animalName;
    animalList.appendChild(listItem);
});
data.section3.examples.forEach((placeName) => {
    const placeList = document.getElementById("placeList");
    const listItem = document.createElement("li");

    listItem.textContent = placeName;
    placeList.appendChild(listItem);
});


document.addEventListener('DOMContentLoaded', function () {
    const subscribeForm = document.getElementById("subscribeForm");

    subscribeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email').value;

        let subscribedEmails = localStorage.getItem('subscribedEmails');
        if (!subscribedEmails) {
            subscribedEmails = [];
        } else {
            subscribedEmails = JSON.parse(subscribedEmails);
        }

        subscribedEmails.push(emailInput);
        localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));

        alert("Thank you for subscribing to our newsletter!");

        // Clear the input field after subscribing
        document.getElementById('email').value = "";
    });

});
