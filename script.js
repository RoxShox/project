let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели0?', " " );

let obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt("Один из последних просмотренных фильмов?", ""),

    b = prompt('На сколько оцените его?', ""),
    c = prompt("Один из последних просмотренных фильмов?", ""),
    d = prompt('На сколько оцените его?', "");


    obj.movies[a] = b;
    obj.movies[c] = d;

    console.log(obj);