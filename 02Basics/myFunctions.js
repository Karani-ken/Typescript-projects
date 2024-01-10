"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, password, isPaid) { }
//arrow function and default value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var getHello = function (s) {
    return "";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
//void functions
function consoleError(errmsg) {
    console.log(errmsg);
}
//never functions
function handleError(errmsg) {
    throw new Error(errmsg);
}
signUp("kenneth", "ken@infinite.com", 3340, false);
loginUser("K", "K@k.com");
addTwo(6);
getUpper("Kenneth");
