'use strict';

// if (!numberOfFilms) {
   
// }
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const lastMovie = prompt("Один из последних просмотренных фильмов?", "");
        const ratingOfLastMovie = +prompt("На сколько оцените его?", "0");
        if (lastMovie != null &&
            lastMovie != '' &&
            ratingOfLastMovie != null &&
            ratingOfLastMovie != '' &&
            lastMovie.length < 50) {
            personalMovieDB.movies[lastMovie] = ratingOfLastMovie;
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <=3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;
    }
}

writeYourGenres();