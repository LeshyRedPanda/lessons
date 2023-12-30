"use strict";



//debugger


const numberOfFilms = +prompt("how many movies u see?") 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



for (let i = 0; i <2; i++ ){
   const a = prompt ("what last movie did u see?",""),
         b = prompt ("How would you rate it?","");
   


    if (a != null && b != null && a != "" && b != "" && a.length < 50 ){
        personalMovieDB.movies[a] = b;
        console.log("ok");
    }

    else {
        console.log("error");
        i--
    }

}

if (personalMovieDB.count < 10 ){
    alert("bad news");
    }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30  ){
    alert("not bad");
    }else if (personalMovieDB.count > 30){
        alert("waste of time");
    }else {
        alert("error");
    }
console.log(personalMovieDB);


