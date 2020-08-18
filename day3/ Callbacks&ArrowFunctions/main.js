// //-----------------------Exercise1-Callbacks-----------------------
// const push = function () {
//     console.log("pushing it!")
//   }

//   const pull = function () {
//     console.log("pulling it!")
//   }
//   pushPull = (func) => func()
//   pushPull(push) //should print "pushing it!"
//   pushPull(pull) //should print "pulling it!"



// //-----------------------Exercise2-Callbacks-----------------------
// const returnTime = function (time) {
//     alert('The current time is: ' + time)
// }
// getTime = () => {
//     const time = new Date()
//     returnTime(time)
// }
// getTime(returnTime)



// //-----------------------Exercise3-Callbacks-----------------------
// const displayData = function (alertDataFunc, logDataFunc, data) {

//     alertDataFunc(data);
//     logDataFunc(data);
//   }
//   logdata = (date) => date
//   displayData(alert, logdata , "I like to party")



// //-----------------------Exercise4-ArrowFunctions----------------------
//  sum = (a, b, c) => a+b+c
//  console.log(sum(1,2,3));



// // -----------------------Exercise5-ArrowFunctions----------------------
// capitalize = (str) => console.log(str.charAt(0).toUpperCase()+ str.toLowerCase().slice(1)) 
// capitalize("bOb") // returns Bob
// capitalize("TAYLOR") // returns Taylor
// capitalize("feliSHIA") // returns Felishia



// -----------------------Exercise6-ArrowFunctions----------------------
// const determineWeather = temp => {
//     if (temp > 25) {
//         return "hot"
//     }
//     return "cold"
// }
// commentOnWeather = temp => console.log('It\'s ' + (determineWeather(temp)));
// commentOnWeather(30) //returns "It's hot"
// commentOnWeather(22) //returns "It's cold"


//-----------------------Exercise7-ArrowFunctions----------------------
// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }
      
//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
//   const makeSound = sound => alert(sound)
      
//   explode(shineLight, makeSound, "BOOM")
