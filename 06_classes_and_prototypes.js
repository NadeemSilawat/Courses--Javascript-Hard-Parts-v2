// Classes & Prototypes oop (Object Oriented Programing).....

// Objects - store functions with their associated data!

const user1 = {
    name : "Will",
    score : 3,
    increment : function(){user1.score++;}
};

user1,increment();


// Creating user2 user dot notation

const user2 = {}; //create an empty object
//assign properties to that object
user2.name = "Tim";
user2.score = 6;
user2.increment = function() {
 user2.score++;
};