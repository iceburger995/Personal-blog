document.addEventListener('DOMContentLoaded', onHtmlLoaded);

function onHtmlLoaded(event) {

    var form = document.getElementById('contact');
    var notice = document.getElementById('notice');
    var genderError = document.getElementsByClassName('gender')[0];
    var firstName = document.querySelector('[name=firstName]');
    var lastName = document.querySelector('[name=lastName]');
    var email = document.querySelector('[name=email]');
    var genders = document.querySelectorAll('[name=gender]');
    var genderM = document.querySelectorAll('[name=gender]')[0];
    var genderF = document.querySelectorAll('[name=gender]')[1];
    var genderO = document.querySelectorAll('[name=gender]')[2];
    var message = document.querySelector('[name=comment]');

    function validation(e) {
        e.preventDefault();

        if (firstName.value === '') {
            firstName.style.border = '2px solid red';
            firstName.focus();
            return false;
        } else if (firstName.value !== '') {
            firstName.style.border = '1px solid #333';
        }
        if (lastName.value === '') {
            lastName.style.border = '2px solid red';
            lastName.focus();
            return false;
        } else if (lastName.value !== '') {
            lastName.style.border = '1px solid #333';
        }
        if (email.value === '') {
            email.style.border = '2px solid red';
            email.focus();
            return false;
        } else if (email.value !== '') {
            email.style.border = '1px solid #333';
        }
        if (genderM.checked === false && genderF.checked === false && genderO.checked === false) {
            genderError.innerHTML += "<h5>Please select a gender</h5>";
            return false;
        } else {
            genderError.innerHTML = "<h4>Gender:</h4>";
        }
        if (message.value === '') {
            message.style.border = '2px solid red';
            message.focus();
            return false;
        } else if (message.value !== '') {
            message.style.border = '1px solid #333';
        }
        for (var i = 0; i < genders.length; i++) {
            if (genders[i].checked) {
                var genderChosen = genders[i];
            }
        }
        notice.className = 'confirmation';
        notice.innerHTML = '<p> Thank you for contacting us, ' + firstName.value + '.</p>';
        var dismiss = document.createElement('button');
        dismiss.setAttribute('type', 'button');
        var dismissText = document.createTextNode('Dismiss');
        dismiss.appendChild(dismissText);
        notice.appendChild(dismiss);
        dismiss.addEventListener('click', function() {
            notice.remove();
        });
        console.log('Name: ' + firstName.value + ' ' + lastName.value + '\nEmail: ' + email.value + '\nGender: ' + genderChosen.value + '\nMessage: ' + message.value);
        return true;
    }
    form.addEventListener('submit', validation);
}