"use strict";
// install Gloal -> npm i -g typescript
//install Local dev -> npm i -D typescript (recommended)
// Type basics:
// Notation
// 1. Type => VARIABLE: TYPE
// 2. Inference -> VARIABLE = VALUE
// Boolean (true/false)
let isDone = false;
isDone = true;
let isComplete = true;
// Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// String
let color = "blue";
color = "red";
// Type more Complex ->
// Array
// 1. TYPE[]
// 2. Array<type>
let list = [1, 4, 6, 7];
let names = ["jhon", "juan", "carlos"];
let hobbies = ["Cooking", "CrossFit"];
// Tuple
let x; // -> position 0 (string) and 1(number)
x = ["hello", 10];
// Enum
// const portrait = 0;
// const landscape = 1;
// const square = 2;
// const panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["landscape"] = 0] = "landscape";
    PhotoOrientation[PhotoOrientation["portrait"] = 1] = "portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["panorama"] = 3] = "panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
let Landscape = PhotoOrientation.landscape;
console.log("Landscape", Landscape); // -> 0
var Roles;
(function (Roles) {
    Roles["Admin"] = "admin";
    Roles["User"] = "user";
    Roles["Guest"] = "guest";
})(Roles || (Roles = {}));
console.log(Roles.Admin); // -> admin
// Any
let idUser; // -> bad practic
idUser = 1; // -> number
idUser = "1"; // -> string
idUser = true; // -> boolean
// Unknown
let notSure = 4;
// -> validation
if (notSure) {
    notSure.toString();
}
let notArray = [1, 2, 3, 5, 7];
if (notArray instanceof Array) {
    notArray.push(1);
}
// Void
function showInfo() {
    console.log('Show info');
}
// Null & Undefined
let nullVariable;
nullVariable = null;
let undefinedVarible;
undefinedVarible = undefined;
// Null % Undefined: Types Union
let colorUser;
colorUser = "red";
colorUser = 0;
let widhtScreen = 100;
widhtScreen = "100%";
widhtScreen = 100;
let widthRules;
widthRules = 200;
let breakpoint = 'xs';
breakpoint = 'sm';
// Functions
function add(a, b) {
    return a + b;
}
;
add(1, 2);
// with -> ?
function plus(a, b) {
    if (b) {
        return a * b;
    }
    return a;
}
;
plus(5, 5);
// -> ? is optional: name?: undefined or string
function sayHello(name) {
    return `Hello ${name}`;
}
sayHello('camilo');
sayHello();
// 3. Interface
