# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @adnan_saeed/lotide`

**Require it:**

`const _ = require('@adnan_saeed/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(...)`: Assert two Arrays if equal or not
* `assertEqual(...)`: Assert if equal or not
* `assertObjectsEqual(...)`: Assert if objects are equal
* `countLetters(...)`: count Letters in a string
* `countOnly(...)`: count specific names and return how many times it was repeated
* `eqArrays(...)`: return true or false if two arrays are equal or not
* `eqObjects(...)`: return true or false if two objects have same value or not
* `findKey(...)`: find key of an object
* `findKeyByValue(...)`: find key by its value
* `head(...)`: head of an array
* `letterPositions(...)`: returns possition of the letter
* `map(...)`: used map function
* `middle(...)`: return middle value of an array
* `tail(...)`: return tail of an array
* `takeUntil(...)`: check data and return until the requirement meets
* `without(...)`: check array and return another array including values that are present in one array but not in other one.
