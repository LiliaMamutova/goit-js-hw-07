
const form = document.querySelector(".login-form")

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.target.elements;
    const inputEmail = elements.email.value.trim();
    const inputPassword = elements.password.value.trim();

    if (inputEmail === "" || inputPassword === "") {
        alert("All form fields must be filled in");
        return;
    }

    const credentialPayload = {
        email: inputEmail,
        password: inputPassword,
    }

    console.log(credentialPayload);
    event.target.reset();

}