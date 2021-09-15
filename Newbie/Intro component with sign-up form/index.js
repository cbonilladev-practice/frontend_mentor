const form = document.getElementById('form_input');

function addError(param) {
	param.parentNode.classList.add('error');
}

function removeError(param) {
	param.parentNode.classList.remove('error');
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const firstName = form['first_name'];
	const lastName = form['last_name'];
	const emailAddress = form['email_address'];
	const password = form['password'];

	if (firstName.value === "") {
		addError(firstName)
	} else {
		removeError(firstName)
	}

	if (lastName.value === "") {
		addError(lastName)
	} else {
		removeError(lastName)
	}

	if (!validateEmail(emailAddress.value)) {
		addError(emailAddress)
	} else {
		removeError(emailAddress)
	}

	if (password.value === "") {
		addError(password)
	} else {
		removeError(password)
	}

})
