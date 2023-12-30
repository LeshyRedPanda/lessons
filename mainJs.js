"use strict";


//014
//debugger


const numberOfFilms = +prompt("how many movies u see?") 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/*const a = prompt ("what last movie did u see?",""),
      b = prompt ("How would you rate it?",""),
      c = prompt ("what last movie did u see?",""),
      d = prompt ("How would you rate it?","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);*/

//015

/*1
for (let i = 0; i < 2; i++ ){
    const a = prompt ("what last movie did u see?",""),
          b = prompt ("How would you rate it?","");
          personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);*/
/*2
for (i = 0; i < 2; i++){
    const a = prompt ("what last movie did u see?",""),
          b = prompt ("How would you rate it?","");
          personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);*/

/*3
for (let i = 0; i < 2; i++ ){
    const a = prompt ("what last movie did u see?",""),
          b = prompt ("How would you rate it?","");
          personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);*/
/*4
for (let i = 0; i < 2; i++) {
    const a = prompt("what last movie did u see?", ""),
          b = prompt("How would you rate it?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
    } else {
        console.log("error");
        i--
    }
}

if (personalMovieDB.count < 10) {
    alert("you don't watch enough movies");
} else if  (personalMovieDB.count > 10 && personalMovieDB.count < 30){
    alert("good boy");
}else if (personalMovieDB.count > 30){
    alert("you spend too much time on movies");
    
} else {
    alert("error")
}
console.log(personalMovieDB);*/

/*5
//debugger

for (let i = 0; i < 2; i++) {
    const a = prompt("what last movie did u see?", ""),
        b = prompt("How would you rate it?", "");


    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('ok');
    }
    else {
        console.log('error');
        i--
    }
}

if (personalMovieDB.count < 10) {
    alert("you don't watch enough movies");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("good boy");
} else if (personalMovieDB.count > 30) {
    alert("you spend too much time on movies");
    
} else {
    alert("error");
    
}

console.log(personalMovieDB);
*/

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