////-----------------------spotcheck1---------------------------
// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log("Hi, I'm " + this.username)
//     }
//   } 
//   person.introduce() 



////-----------------------exercise1---------------------------
// const person = {
//     hungry: true,

//     feed: function () {
//       if (this.hungry) {
//         hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }

//   person.feed() //should alert "I'm no longer hungry"



////-----------------------exercise2---------------------------
// const pump = function (amount) {//amount=2
//     this.liters += amount;//this.litter=5
//     console.log('You put ' + amount + ' liters in ' + this.name);//this.amount=garage.car1.3
//   };

//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };

//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);



////-----------------------exercise3---------------------------
// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };

//   const airplane = {
//       fuel: 0, 
//     fly: function () {
//       if (this.fuel < 2) {//this.fuel=airplane.fuel=0
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };

//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());



// //-----------------------exercise4---------------------------
// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function (num) {
//         this.coinCount -= num;
//     }
//   };

//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);



////-----------------------exercise5---------------------------
//   const revealSecret = function () {//
//     return this.secret;
//   };

//   const shoutIt = function (person, func) {//avi,secret
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };

//   const avi = {
//     name: "Avi" ,
//     secret: "Im scared of snakes!",
//   };

//   const narkis = {
//     name: "Narkis" ,
//     secret: "I dont have secrets because I'm zen like that.",
//   };

//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);


////-----------------------exercise6---------------------------
// const coffeeShop = {
//     beans: 40,

//     drinkRequirements: {
//         latte: 10,
//         americano: 5,
//         doubleShot: 15,
//         frenchPress: 12
//     },
//     makeDrink: function (drinkType) {
//         const beansValue = this.drinkRequirements[drinkType]
//         if (this.drinkRequirements[drinkType]) {
//             if (this.beans > beansValue) {
//                 this.beans -= beansValue
//                 console.log(`enjoy your ${drinkType}`);
//             } else {
//                 console.log("Sorry, we're all out of beans");
//             }
//         } else {
//                 console.log(`Sorry, we don't make ${drinkType}`);
//     }
// }
// }
  
//     coffeeShop.makeDrink("latte");
//     coffeeShop.makeDrink("americano");
//     coffeeShop.makeDrink("filtered");
//     coffeeShop.makeDrink("doubleShot");
//     coffeeShop.makeDrink("frenchPress");




