var movie = {
    title: "Dirty Harry",
    year: 1971,
    language: "English"
}
// Add new key - value pair
movie.actor = "Clint Eastwood"
// Update an existing key - value paie
movie.year = 1972
// Removes a key - value pair
delete movie.language


var movie2 = {
    title: "Scott Pilgrim Vs The World", 
    year: 2010,
    cast: ["Michael Cera", "Chris Evans"],
    subtitleLanguage: "German",
    ratings: {IMDB: 7.6, RT: {critics: 82, audience: 84}}
}

// console.log(movie2.cast[1]);
console.log(movie2.ratings.RT.audience);