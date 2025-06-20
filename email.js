function sendEmail() {
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");
    let params = {
        from_name : name.value,
        from_email : email.value,
        message : message.value
    }

    // Basic validation
    if (!name.value || !email.value || !message.value) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
        return;
    }

  // Email format validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
        return;
    }

    emailjs.send("service_u7h9pbb", "template_rfw1kdd", params)
    .then(() => {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        document.getElementById("contactForm").reset();
    })
}