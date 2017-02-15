// Let's start with a sample array;

var sample = [];

//This is an empty array lets put some data in it:

//Constructor function:

var Person = function(firstName, lastName, company, title, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.company = company;
    this.title = title;
    this.age =age;
    sample.push(this);
};

new Person('Michael', 'Montgomery', 'WMTEK', 'Senior Software Engineer', 29);
new Person('Tim', 'Cook', 'Apple Inc.', 'Chief Executive Officer', 43);
new Person('Chelsea', 'Sumner', 'Still Elegance Photography', 'Creative Director', 32);
new Person('Justin', 'Paoletta', 'Apple Inc', 'Senior AppleCare Advisor', 26);
new Person('Nancy', 'Lanier', 'Harris Corporation', 'Project Manager', 44);


//Okay, we now have an object array. We'll also create a simple of array of numbers:


var simpleSample = [1,2,5,4,5,7,8,5,8,6,6,5,7,4,5,4,4,5,7,5,8,5,6,9,6];


//Methods:


//Sort


simpleSample.sort(); // ==> [1,2,4,4,4,5,5,5,5,5,5,5,6,6,6,6,6,7,7,7,7,8,8,8,8,9]

// sort objects in array by age.

sample.sort(function(a,b) {
    if(a.age > b.age) {
        return 1;
    } else if(a.age < b.age) {
        return -1;
    } else {
        return 0;
    }
});
