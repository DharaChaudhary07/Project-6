

class Person {
    constructor(age) {
        this.age = age;
    }

    Father() {
       return new Person(60);
    }
    Child() {
        return new Person(20);
    }
}

let person = new Person();

let father = person.Father();
let child = person.Child();

console.log("Father Age:", father.age);
document.getElementById("father").innerHTML = "Father Age: " + father.age;

console.log("Children Age:", child.age);
document.getElementById("child").innerHTML = "Children Age: "+ child.age;

