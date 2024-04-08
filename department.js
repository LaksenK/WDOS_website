fetch("department.json")
    .then((response) => response.json())
    .then((data) => {
        //local storage
        if (!localStorage.getItem("departmentData")) { localStorage.setItem("departmentData", JSON.stringify(data)); }
    })
    .catch((error) => {
        console.error("Error", error);
    });

const data = JSON.parse(localStorage.getItem("departmentData"));
document.getElementById("dpIntro").innerHTML = data.main.Intro;
document.getElementById("dpIntp").innerHTML = data.main.Introp;
document.getElementById("dpMp").innerHTML = data.main.Intro_Description;
document.getElementById("dpA").innerHTML = data.main.Introp1;
document.getElementById("dpA").innerHTML = data.main.Introp1;
document.getElementById("parks").innerHTML = data.main.Introp2;
document.getElementById("area1").innerHTML = data.protectedareas[0].name;
document.getElementById("area2").innerHTML = data.protectedareas[1].name;
document.getElementById("area3").innerHTML = data.protectedareas[2].name;
document.getElementById("area4").innerHTML = data.protectedareas[3].name;
document.getElementById("area5").innerHTML = data.protectedareas[4].name;
document.getElementById("area6").innerHTML = data.protectedareas[5].name;
document.getElementById("area7").innerHTML = data.protectedareas[6].name;
document.getElementById("area8").innerHTML = data.protectedareas[7].name;
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