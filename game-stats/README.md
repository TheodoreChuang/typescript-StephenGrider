## Game Statistics:

A node program that reads a CSV file and produces reports.
CSV Game Data => Load => Parse => Analyze => Report

CSV Headers: Game Date, Home Team, Away Team, Home Team Score, Away Team Score, Winning Team (H, A, D), Referee

### Concepts Used:

- enums (ex. enum MatchResult)
- type assertions (values as type)
- tuples (ex. type MatchDate)
- abstract class (ex. CsvReader)
- generics, used heavily in reusable code (ex. CsvFileReader<TypeOfData>)

### Setup

Create ./build and ./src
`$ tsc --init`
Update tsconfig.json outDir and rootDir

`$npm init -y`
`$ npm i @types/node`
`$ npm i nodemon concurrently -D`

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

`$ npm i typescript jest @types/jest ts-jest -D`

Add 'jest.config.js`

Update package.json with:

```
"scripts": {
    "test: "jest --watch"
  },
```

source: https://basarat.gitbooks.io/typescript/docs/testing/jest.html
https://amenallah.com/node-js-typescript-jest-express-starter/
