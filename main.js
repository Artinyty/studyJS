const numberOfFilms = +prompt("сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  prival: false
};
const a = prompt("Один из последних посмотреных фильмов?", ""),
  b = +prompt("На сколько оцените его?", ""),
  c = prompt("Один из последних посмотреных фильмов?", ""),
  d = +prompt("На сколько оцените его?", "");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);