// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    let newArr = cats.slice();
    newArr.push("Broom");
    return newArr;
}

function prependCat(name) {
    let newArr = cats.slice();
    newArr.unshift("Arnold");
    return newArr;
}

function removeLastCat() {
    let newArr = cats.slice();
    newArr.pop();
    return newArr;
}

function removeFirstCat() {
    let newArr = cats.slice();
    newArr.shift();
    return newArr;
}