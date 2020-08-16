//===================================================================================
//Section 1
//==================================================================================
const run = true //global scope

if (run) {
    let distance = 8 //local scope inside of "if" 
    for (var i = 0; i < distance; i++) {
        console.log("running") //expcted:"running"
    }
    console.log("Finished running " + distance + " miles")// expected "Finished running 8 miles"
}


console.log("Damn, you see this gal? She ran " + distance + " miles") //error distance is not defined  
    //===================================================================================//Section 2//===================================================================================
if (13 == "space") {
    let cowSound = "moo" //local scope
}
else {
    console.log("Cow says " + cowSound) //error cowSound is not defined  
}

//===================================================================================
//Section 3
//===================================================================================
const serveOrders = function (orders) { //orders is global scope array

    for (let order of orders) {
        let specialOrder = "special " + order //specialOrder and order is local scope
        console.log("Served a " + specialOrder) //expected: "Served a " + specialOrder
    }

    console.log("Finished serving all the orders: " + orders) //expected: "Finished serving all the orders: " + orders
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)

//===================================================================================
//Section 4
//===================================================================================
const pot = "red pot with earth in it" // global scope 

const getSeed = function () {
    const seed = "brown seed" //local scope
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot) //error seed is not defined  pot is defined
}

plant()

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }] //users array is local scope
    for (let u of users) { //u is local scope
        if (u.name == name) {
            const found = true //local scope
        }
    }
    return found // ERROR found is not defined
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
let isEnough = false //global scope 

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true //global scope = true
        }
    }
}

makeEnough()
if (isEnough) { //global scope = true
    console.log("Finally, sheesh") //expected: "Finally, sheesh" 
}
else {
    console.log("Here we go again...")
}
