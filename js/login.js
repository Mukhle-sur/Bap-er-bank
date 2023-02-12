// step no :1 add click event handeler with the submit button.
document.getElementById('submit-button').addEventListener('click', function () {
    // step on 2:get  the email address inside the email input field
    const getEmail = document.getElementById('user-email');
    const email = getEmail.value;

    const getPassowrd = document.getElementById('user-password');
    const password = getPassowrd.value;


    // do not use this way just learn

    if (email == 'sontan@bap.com' && password == '12341234') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Tui password vule gesos!!! Tore ami tejjo sontan korlam');
    }
})