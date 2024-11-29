document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    const commentsContainer = document.getElementById('comments');

    function fetchComments() {
        const randomId = Math.floor(Math.random() * 500) + 1;
        fetch(`https://jsonplaceholder.typicode.com/comments?id=${randomId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                preloader.style.display = 'none';
                renderComments(data);
            })
            .catch(error => {
                preloader.style.display = 'none';
                const errorMessage = document.createElement('p');
                errorMessage.textContent = '⚠ Что-то пошло не так';
                commentsContainer.appendChild(errorMessage);
            });
    }

    function renderComments(comments) {
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.className = 'comment';

            const nameElement = document.createElement('h3');
            nameElement.textContent = comment.name;

            const emailElement = document.createElement('p');
            emailElement.textContent = comment.email;

            const bodyElement = document.createElement('p');
            bodyElement.textContent = comment.body;

            commentElement.appendChild(nameElement);
            commentElement.appendChild(emailElement);
            commentElement.appendChild(bodyElement);

            commentsContainer.appendChild(commentElement);
        });
    }

    fetchComments();
});
