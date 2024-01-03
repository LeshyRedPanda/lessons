"use strict";



debugger


let numberOfFilms; // = +prompt("how many movies u see?")

function start() {
    numberOfFilms = +prompt("how many movies u see?","");

     while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("how many movies u see?","");
        
    }
}

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        const a = prompt("what last movie did u see?", ""),
            b = prompt("How would you rate it?", "");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("ok");
        } else {
            console.log("error");
            i--
        }
    
    }

}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("bad news");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("not bad");
    } else if (personalMovieDB.count > 30) {
        alert("waste of time");
    } else {
        alert("error");
    }

}

//detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
}

//showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Your favorite genre number ${i}`);
        personalMovieDB.genres[i - 1] = genre;
        //personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`); -можно еще так записать для экономии .
    }
}

writeYourGenres();

console.log(personalMovieDB);

















