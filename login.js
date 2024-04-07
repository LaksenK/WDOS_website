document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("loginform").addEventListener('submit', function (event) {
        event.preventDefault();
        fetch('login.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })

            .then(data => {
                const usernameInput = document.getElementById('username').value;
                const passwordInput = document.getElementById('password').value;
                var user = data.users.find(
                    (users) => users.username === usernameInput && users.password === passwordInput
                );
                if (user) {
                    alert('Login successful!');
                    localStorage.setItem("currentUser",JSON.stringify(user))
                    window.location.href = 'dashboard.html'; // Redirect to dashboard page
                } else {
                    alert('Invalid username or password');
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
});

