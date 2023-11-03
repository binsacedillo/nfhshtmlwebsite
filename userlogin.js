// const loginForm = document.getElementById('login-form');
// const signUpBtn = document.getElementById('sign-up-btn');

// loginForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   // code to handle login form submission
// });

// signUpBtn.addEventListener('click', () => {
//   window.location.href = 'signup.html'; // Change the URL to the desired signup page
// });


// document.querySelector("form").addEventListener("submit", (e) => {
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   if (username.length < 4 || password.length <6) {
//     e.preventDefault();
//     alert("Username must be at least 4 characters and password must be at least 6 characters.");
//   }
// });

const credentials = [
    { username: 'VINCE GIO N. ACEDILLO', password: 'OCTOBER01' },
    { username: 'CRISTIANO RONALDO', password: 'REALMADRID' },
    { username: 'STEPHEN CURRY', password: 'WARRIORS' },
];

function authenticate() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const isValidUser = credentials.some(
        (user) => user.username === username && user.password === password,
    );

    if (isValidUser) {
        // Redirect to the desired page upon successful login
        window.location.href = "welcome.html";
    } else {
        alert('Invalid username or password!');
    }
}