let numberOfFilms;
if (!numberOfFilms) {
    numberOfFilms = prompt("Сколько фильмов вы уже просмотрели?", "");
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 || personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}