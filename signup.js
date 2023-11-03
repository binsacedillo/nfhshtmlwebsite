document.getElementById('signUpButton').addEventListener('click', function (event) {
    event.preventDefault();

    const password = document.getElementById('password');
    const retypePassword = document.getElementById('retype-password');
    const answer = document.getElementById('answer');
    const retypeAnswer = document.getElementById('retype-answer');
    const securityQuestion = document.getElementById('security-question');

    if (password.value === '' || retypePassword.value === '' || answer.value === '' || retypeAnswer.value === '' || securityQuestion.value === '') {
        alert('Please fill out the entire form.');
        return;
    }

    if (password.value !== retypePassword.value) {
        alert('Passwords do not match!');
        return;
    }

    if (answer.value !== retypeAnswer.value) {
        alert('Answers do not match!');
        return;
    }

    alert('Successfully created account!');
    window.location.href = 'welcome.html';
});