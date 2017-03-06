# has-getter

A [Node.js](https://nodejs.org/) module that checks if an object has a property with a defined getter function.

## Installation

```bash
npm install has-getter --save
```

The module exposes a single function.

## Usage

```javascript
const hasGetter = require('has-getter')

class Test {
  get data () { return 'example' }
}

hasGetter(Test.prototype, 'data') // true

const test = new Test()

hasGetter(test, 'data') // true
```
