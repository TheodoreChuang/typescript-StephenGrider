# Web Framework

## MODEL

### class User

- private data: UserProps
- get(propName: string): (string | number)
- set(update: UserProp): void
- on(eventName: string, callback: () =>{})
- trigger(eventName: string): void
- fetch(): Promise
- save(): Promise

## VIEW

### Set Up

### Run

`$ parcel index.html`

### Testing

`$ npm i typescript jest @types/jest ts-jest -D`

Add 'jest.config.js`

Update package.json with:

```
"scripts": {
    "test: "jest --watch"
  },
```
