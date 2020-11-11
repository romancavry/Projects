"use strict";

let id = Symbol('id');

let user = {
    name: 'Roman',
    age: 19,
    [id] : 228,
}

alert( Object.getOwnPropertySymbols(id) );