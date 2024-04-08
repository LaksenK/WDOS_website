//introduction,html
fetch("intoduction.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        // document.getElementById("maini").innerHTML= data.main.Intro;
        if (!localStorage.getItem("introductionData")) { localStorage.setItem("introductionData", JSON.stringify(data)); }
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("introductionData"));
document.getElementById("intIntro").innerHTML = data.main.Intro;
document.getElementById("intIp").innerHTML = data.main.Intro_Description;
document.getElementById("intpk1").innerHTML = data.park1.name;
document.getElementById("intro1").innerHTML = data.park1.description;
document.getElementById("intpk2").innerHTML = data.park2.name;
document.getElementById("intro7").innerHTML = data.park2.description;
document.getElementById("intpk3").innerHTML = data.park3.name;
document.getElementById("intro13").innerHTML = data.park3.description;
document.getElementById("intpk4").innerHTML = data.park4.name;
document.getElementById("intro19").innerHTML = data.park4.description;

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