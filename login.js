document.addEventListener('DOMContentLoaded', function () { //HTML document has been completely loaded and parsed
    document.getElementById("loginform").addEventListener('submit', function (event) { //works after form is submitted
        event.preventDefault();
        fetch('login.json')//feching json file
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })

            .then(data => {//get imputs from user
                const usernameInput = document.getElementById('username').value;
                const passwordInput = document.getElementById('password').value;
                var user = data.users.find(//check the validation
                    (users) => users.username === usernameInput && users.password === passwordInput
                );
                if (user) {
                    alert('Login successful!');
                   // localStorage.setItem("currentUser", JSON.stringify(user))
                    if (user.role == "admin") {
                        window.location.href = 'dashboard.html'; //  to dashboard page
                    }
                    else {
                        window.location.href = "index.html";// to Home
                    }

                } else {
                    alert('Invalid username or password');
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);//if there was a error in fetch
            });
    });
});
