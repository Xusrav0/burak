// Compiled Languages: Java, GoLang, C, C++, C#, Rust  => Compiling(mashina tiliga o'giriladi) keyin Running bo'ladi 

// Interpreted Languages: NodeJS, Python, PHP, Ruby    =>  Running


// Error (Java) compile error beradi run bo'lishdan oldin

// Error Type

// Primitive type
let box: string ='hello';
box = "100"; // 100 number bo'lganda error beradi 

let counter: number = 100;

let stage: number | string = 'hello';

let pending: boolean = true;

// Object type
// interface
interface Person {
    name: string,
    age: number,
    nation: string
}

let person: Person = {
    name: 'Aaron',
    age: 30, // number berganimiz uchun 'hi' va stringlar ishlamidi
    nation: 'American'
}

let skills: (number | string)[]; // ham number va string qilish uchun
skills = ['Problem Solving', 'software Design', 'Programming', 100]

class Person1 {
    age: number;
    firstName: string;
    lastName: string;

    constructor(age: number, firstName: string, lastName: string) {
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName
    }
}

const person1 = new Person1(30, "Aaron", 'Robertson');





console.log('EXECUTED!')

import moment from "moment";

const currentTime = moment().format('YYYY-MM-DD')
console.log(currentTime)

const person2: string = 'Aaron';
const count: number = 100;

// Architectual Pattern: MVC, Dependency Injection, MVP

// MVC = MODEL VIEW CONTROLLER

// Design Pattern: Middleware, Decorator


