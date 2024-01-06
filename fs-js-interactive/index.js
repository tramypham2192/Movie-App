//select the form element
const form = document.querySelector('form');
form.addEventListener('submit', addMovie);
//select message element
const message = document.querySelector('#message');

function addMovie(event) {
    event.preventDefault();
    const inputField = document.querySelector('input');
    //step 1: create the list of movies
    const movie = document.createElement('li');
    //step 2: create the movie title 
    const movieTitle = document.createElement('span');
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie); //display movies as watched or not
    //step 3: add delete button next to the movie title
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X'; //display the delete button content is x
    deleteBtn.addEventListener('click', deleteMovie);
    //add movieTitle to movie
    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn); //one movie title comes with one delete button
    //add movie to ul element
    const ulElement = document.querySelector('ul');
    ulElement.appendChild(movie);
    inputField.value = '';
}

function deleteMovie(event) {
    event.target.parentNode.remove();
    message.textContent = event.target.parentNode.textContent + ' deleted!';
    revealMessage();
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked');
    if (event.target.classList.contains('checked')) {
        message.textContent = event.target.textContent + ' watched!';
    } else {
        message.textContent = event.target.textContent + ' added back!';
    }
    revealMessage();
}

function revealMessage() {
    message.className.remove('hide');
    setTimeout(() => {
        message.className = 'hide';
    }, 1000);
}