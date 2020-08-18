// //--------------------- Exercise 1 ---------------------
// const StringFormatter = function () {
//     const capitalizeFirst = function (str) {
//         console.log(str.charAt(0).toUpperCase()+ str.toLowerCase().slice(1));
//     }
//     const skewerCase = function (str) {
//         console.log(str.replaceAll(' ', '-'));
//     }
//     return {
//          capitalizeFirst,
//          skewerCase
//     }
// }
// const formatter = StringFormatter()
// formatter.capitalizeFirst("dorothy") //should print Dorothy
// formatter.skewerCase("blue box") //should print blue-box


//--------------------- Exercise 2 ---------------------
// const Bank = function () {
//     let _money = 500
//     const depositCash = function (cash) {
//         _money += cash
//     }
//     const checkBalance = function () {
//         console.log(_money);
//     }
//     return {
//         deposit: depositCash,
//         showBalance: checkBalance
//     }
// }
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance() //should print 950




// //--------------------- Exercise 3 ---------------------
// const SongsManager = function () {
//     const songs = () => {
//         const songs = {}
//         return songs
//     }

//     const addSong = (name, url) => {
//         songs[name] = url.slice(url.indexOf('=') + 1)
//     }
//     const getSong = songName => songs[songName]

//     return {
//         addSong,
//         getSong
//     }
// }
// const songsManager = SongsManager()
// songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
// songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
// songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

// songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ