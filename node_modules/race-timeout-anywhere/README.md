[![view on npm](https://img.shields.io/npm/v/race-timeout-anywhere.svg)](https://www.npmjs.org/package/race-timeout-anywhere)
[![npm module downloads](https://img.shields.io/npm/dt/race-timeout-anywhere.svg)](https://www.npmjs.org/package/race-timeout-anywhere)
[![Build Status](https://travis-ci.org/75lb/race-timeout-anywhere.svg?branch=master)](https://travis-ci.org/75lb/race-timeout-anywhere)
[![Dependency Status](https://badgen.net/david/dep/75lb/race-timeout-anywhere)](https://david-dm.org/75lb/race-timeout-anywhere)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# race-timeout-anywhere

An isomorphic, load-anywhere timeout function for use with `Promise.race`.

The `raceTimeout` function never resolves, it will only reject once the specified time period has elapsed. In the example below, `fetchDataSomehow()` must resolve before `raceTimeout` rejects after 1000ms, else a timeout exception is thrown.

```js
const raceTimeout = require('race-timeout-anywhere')

try {
  const data = await Promise.race([
    fetchDataSomehow(),
    raceTimeout(1000)
  ])
  /* fetchDataSomehow() took less than 1000ms, process data */
} catch (err) {
  /* fetchDataSomehow() took longer than 1000ms */
}
```

### Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

Node.js:

```js
const raceTimeout = require('race-timeout-anywhere')
```

Within Node.js with ECMAScript Module support enabled:

```js
import raceTimeout from 'rice-timeout-anywhere'
```

Within an modern browser ECMAScript Module:

```js
import raceTimeout from './node_modules/rice-timeout-anywhere/index.mjs'
```

Old browser (adds `window.raceTimeout`):

```html
<script nomodule src="./node_modules/raceTimeout/dist/index.js"></script>
```

* * *

&copy; 2018-19 Lloyd Brookes \<75pound@gmail.com\>.
