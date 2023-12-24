"use strict";  
//debugger


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

