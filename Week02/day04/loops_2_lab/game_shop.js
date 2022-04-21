var shop = {
    name: "Tigers Game Shop",
    location: "Glasgow",
    inventory: [
        {
        title: "Elden Ring",
        genre: "RPG",
        developer: "FromSoftware",
        ratings: {
            critics: 100,
            players: 100
        },
        platforms: ["PS", "XBOX", "PC"]
    },
        {
        title: "Fifa 22",
        genre: "Sport",
        developer: "EA",
        ratings: {
            critics: 19,
            players: 10
        },
        platforms: ["PS", "XBOX", "PC"]
    },
        {
        title: "Horizon Forbidden West",
        genre: "RPG",
        developer: "Guerrilla Games",
        ratings: {
            critics: 94,
            players: 89
        },
        platforms: ["PS", "PC"]
    },
        {
        title: "Halo Infinite",
        developer: "343 Industries",
        genre: "FPS",
        ratings: {
            critics: 95,
            players: 100
        },
        platforms: ["XBOX", "PC"]
    },
        {
        title: "Forza 5",
        developer: "Playground Games",
        genre: "Sport",
        ratings: {
            critics: 80,
            players: 75
        },
        platforms: ["XBOX", "PC"]
    },
        {
        title: "CyberPunk 2077",
        developer: "CD Projekt",
        genre: "RPG",
        ratings: {
            critics: 50,
            players: 40
        },
        platforms: ["XBOX", "PC"]
    },
        {
        title: "Call of Duty: Warzone",
        developer: "Raven Software",
        genre: "FPS",
        ratings: {
            critics: 25,
            players: 65
        },
        platforms: ["PS", "XBOX", "PC"]
    }
    ]
}


// 1. Console log the name and location of the shop
// console.log(shop.name, shop.location);

// 2. Console log the entire inventory
// console.log(shop.inventory);

// 3. Loop through the inventory and console log every game title
// var gameTitles = []

// for(var game of shop.inventory){
//     var titles = game.title
//     gameTitles.push(titles)
// }
// console.log(gameTitles);

// 4. Loop through the inventory and console log the game title with its player rating
// var gameTitlesRatings = []

// for(var game of shop.inventory){
//     var titlesRatings = {title: game.title,  rating: game.ratings.players}
//     gameTitlesRatings.push(titlesRatings)
// }
// console.log(gameTitlesRatings);

// 5. CyberPunk 2077 critic rating is too low. Find "CyberPunk 2077" in the inventory and change its critic rating to 75.
// shop.inventory[5].ratings.critics = 75
// console.log(shop.inventory[5].ratings);

// 6. We want a new array of only the game developers. Create a new array, loop through the inventory and add each developer to the new array
// var gameDevs = []
// for(var game of shop.inventory){
//     var gameDevelopers = {developers: game.developer}
//     gameDevs.push(gameDevelopers)
// }
// console.log(gameDevs);

// 7. We want a new array of only top tier games. Create a new array and only add games whos critic rating is over 90
// var goodGames = []

// for(var game of shop.inventory){
//     if(game.ratings.critics > 90){
//         console.log(game);
//     }
// }

// 8. Create a new array that holds games that are only available on "PS" (Tricky!)
// var psGames = []

// for(var game of shop.inventory){
//     for(var platform of game.platforms){
//         if(platform === "PS"){
//             var games = game
//             psGames.push(games)
//         }
//     }
// }
// console.log(psGames);