// Classes & Prototypes oop (Object Oriented Programing).....

// Objects - store functions with their associated data!

const user1 = {
    name: "Will",
    score: 3,
    increment: function () { user1.score++; }
};

user1.increment();


// Creating user2 user dot notation

// Declare an empty object and add properties with dot notation



const user2 = {}; //create an empty object


//assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function () {
    user2.score++;
};

/*******************************************/

//Factory Function .............


// Creating user3 using Object.create  //

const user3 = Object.create(null);

user3.name = "Eve";
user3.score = 9;
user3.increment = function () {
    user3.score++;

}
console.log(user3);
console.log(user3.increment());
console.log(user3);


/*************************************************/

// Solution 1. Generate objects using a function


function userCreator(names, score) {
    const newUser = {};
    newUser.names = names;
    newUser.score = score;
    newUser.increment = () => newUser.score++;

    return newUser;
}

const person1 = userCreator("will", 6);
const person2 = userCreator("Tim", 2);

console.log(person1)


/////////////////////////////////////////////////////

// Solution 2: Using the prototype chain
function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;
    return newUser;
};
const userFunctionStore = {
    increment: function () { this.score++; },
    login: function () { console.log("Logged in"); }
};
const users1 = userCreator("Will", 3);
const user2 = userCreator("Tim", 5);
users1.increment();
