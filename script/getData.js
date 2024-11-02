(function() {
    const form = document.getElementById('userForm');
    const userDataDiv = document.getElementById('userData');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        userDataDiv.innerHTML = `
            <h3>Ваши данные:</h3>
            <p>Имя: ${name}</p>
            <p>Email: ${email}</p>
        `;
    });
})();
