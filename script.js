'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt("Сколько фильмов вы уже просмотрели?", "");

        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже просмотрели?", "");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            while (genre == '' || genre == null) {
                genre = +prompt(`Ваш любимый жанр под номером ${i}`);
            }
            personalMovieDB.genres[i - 1] = genre;
        }
        this.genres.forEach((genre, i) => {
            console.log(`Любимый жанр #${i+1} - это ${genre}`);
        });
    },
    toggleVisibleMyDB: function() {
        if (this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    },
};