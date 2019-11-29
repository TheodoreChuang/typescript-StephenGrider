## Sort

A general purpose bubble sort (generally not efficient) algorithm that can handle various data types.

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
