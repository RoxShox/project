let numberOfFilms; 


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', " " );

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', " " );

    }
}

start();

let obj = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};



 

    function rememberMyFilms() {
        for( let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?", ""),
            b = prompt('На сколько оцените его?', "");
    
            if(a != null && b != null && a!= '' && b != "" && a.length < 50) {
                obj.movies[a] = b;
                console.log('done');
    
            } else {
                console.log('error');
                i--;
            }
        }
    }

    // rememberMyFilms();


    function detectPersonalLevel() {
        if( obj.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (obj.count >= 10 && obj.count <= 30) {
            console.log('Вы классический зритель');
        } else if (obj.count > 30) {
            console.log('Киноман');
        }
         else{
             console.log('Ошибка');
         }
            console.log(obj); 
    }

    // detectPersonalLevel();

    function showMyDB (hidden) {
        if (!hidden) {
            console.log(obj);
        }
    }

    showMyDB(obj.privat);

    function writeYourgeners () {
        for ( let i = 1; i < 4; i++ ) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            obj.genres[i - 1] = genre;
        }
    }

    writeYourgeners();

    

    





