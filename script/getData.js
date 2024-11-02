(function () {
    const form = document.getElementById('userForm');
    const userDataDiv = document.getElementById('userData');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        userDataDiv.innerHTML = '';

        const title = document.createElement('h3');
        title.textContent = 'Ваши данные:';
        userDataDiv.appendChild(title);

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Имя: ${name}`;
        userDataDiv.appendChild(nameParagraph);

        const emailParagraph = document.createElement('p');
        emailParagraph.textContent = `Email: ${email}`;
        userDataDiv.appendChild(emailParagraph);
    });
})();
