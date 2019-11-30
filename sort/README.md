## Sort

A general purpose bubble sort (generally not efficient) algorithm that can handle various data types.

number[] | [10, 3, -5, 0] => [ -5, 0, 3, 10]

## Interfaces VS Abstract Classes?

Interfaces creates a contract on how entity can communicate with another entity. We able to create a generic Sorter class that can sort various types of as long as they adhere to the contract defined in the interface. Use when we have very different objects that want to work together. Promotes loose coupling.

Abstract Classes set up a contract between classes. Use to build up the definition of an class with inheritance. Strongly couples classes together.

### Setup

Create ./build and ./src
`$ tsc --init`
Update tsconfig.json outDir and rootDir

`$ npm i nodemon concurrently --save-dev`
Update package.json with:

```
"scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon build/index.js",
    "start": "concurrently npm:start:*"
  },
```

`$ npm start` will now watch for changes build and run with every save

### Testing

`$ npm i jest @types/jest ts-jest -D`

source: https://basarat.gitbooks.io/typescript/docs/testing/jest.html
https://amenallah.com/node-js-typescript-jest-express-starter/
