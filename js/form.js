function sendForm() {
    Email.send({
        SecureToken: 'be8f7ab5-d30d-43d0-b45b-176f956cf116',
        // Host : "smtp.elasticemail.com",
        // Username : "hel.sob.orders.2022@gmail.com",
        // Password : "A41F387B2CA3EE0E33A48EC8B63C4903A536",
        To : 'olysob7@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Тобі відповіли на сайті, перевірь!)",
        Body: "Ім'я: " + document.getElement('name').value +
            "<br> Пошта: " + document.getElementById('email').value +
            "<br> Коментар: " + document.getElementById('message').value,
    }).then(
    message => alert(message)
    );
}


function sendEmail() {
    Email.send({
        SecureToken: 'be8f7ab5-d30d-43d0-b45b-176f956cf116',
        // Host : "smtp.elasticemail.com",
        // Username : "hel.sob.orders.2022@gmail.com",
        // Password : "A41F387B2CA3EE0E33A48EC8B63C4903A536",
        To: 'olysob7@gmail.com',
        From : document.getElementById('email-by-click').value,
        Subject : "Тобі відповіли на сайті, перевірь!)",
        Body: "Пошта: " + document.getElementById('email').value,
    }).then(
    message => alert(message)
    );
}