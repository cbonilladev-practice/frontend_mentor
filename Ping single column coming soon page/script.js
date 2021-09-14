const form = document.getElementById("form");

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function addError(param) {
	param.parentNode.classList.add("error");
}

function removeError(param) {
	param.parentNode.classList.remove("error");
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = form['email'];

	if (!validateEmail(email.value)) {
		addError(email);
	} else {
		removeError(email);
	}
});