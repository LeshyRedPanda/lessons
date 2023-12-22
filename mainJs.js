"use strict";  
/*debugger
const numberOfFilms= +prompt ("howMenyMoviesYouSee","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt ("what last movie did u see?",""),
      b = prompt ("how much would you rate it?",""),
      c = prompt ("what last movie did u see?",""),
      d = prompt ("how much would you rate it?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);*/

/*1
const numberOfFilms = +prompt ("how meny movies you see ?");
//2
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    generes : [],
    privat : false
};

//3

const a = prompt ("what last movie did u see?",""),
      b = prompt ("how much would you rate it?",""),
      c = prompt ("what last movie did u see?",""),
      d = prompt ("how much would you rate it?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);*/

/*const numberOfFilms = +prompt ("how many movies u see");

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

const a = prompt ("what last movie did u see?",""),
      b = prompt ("How would you rate it?",""),
      c = prompt ("what last movie did u see?",""),
      d = prompt ("How would you rate it?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);*/

//how many movies u see , what last movie did u see? , How would you rate it?

const numberOfFilms = +prompt ("how many movies u see?")

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const a = prompt ("what last movie did u see?",""),
      b = prompt ("How would you rate it?",""),
      c = prompt ("what last movie did u see?",""),
      d = prompt ("How would you rate it?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

//3:48