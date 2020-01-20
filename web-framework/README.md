# Web Framework

### TypeScript Concepts

- generic constrains get<K extends keyof T>(key: K): T[K] { ... }
  - https://www.udemy.com/course/typescript-the-complete-developers-guide/learn/lecture/15066982#content
  - or via interface, class
- type guard
- abstract classes & methods

### Class Design

- composition
- delegation (simple pass through or coordination of multiple sub modules)

## MODEL

#### class User

- private data: UserProps
- get(propName: string): (string | number)
- set(update: UserProp): void

#### class Eventing

- on(eventName: string, callback: () => void)
- trigger(eventName: string): void

#### class Sync

- fetch(): Promise
- save(): Promise

## VIEW

- parent: Element
- template(): string representation of HTML
- render(): append template HTML to parent element within DOM

- View (abstract class)
  - UserEdit
    - UserShow
    - UserForm

### Set Up

### Run Frontend

`$ parcel index.html`

### Run Backend

Backend server by JSON server
`$ json-server -w db.json`

### Testing

`$ npm i typescript jest @types/jest ts-jest -D`

Add 'jest.config.js`

Update package.json with:

```
"scripts": {
    "test: "jest --watch"
  },
```
