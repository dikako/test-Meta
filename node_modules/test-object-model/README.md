[![view on npm](https://img.shields.io/npm/v/test-object-model.svg)](https://www.npmjs.org/package/test-object-model)
[![npm module downloads](https://img.shields.io/npm/dt/test-object-model.svg)](https://www.npmjs.org/package/test-object-model)
[![Build Status](https://travis-ci.org/test-runner-js/test-object-model.svg?branch=master)](https://travis-ci.org/test-runner-js/test-object-model)
[![Dependency Status](https://badgen.net/david/dep/test-runner-js/test-object-model)](https://david-dm.org/test-runner-js/test-object-model)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

***This project and documentation are a work in progress***.

# test-object-model

Used for defining a test suite for use with a compatible runner. The model describes your test functions, how they are grouped, the order in which they should run, the config for each (timeout, max concurrency etc.)

It is supplied as input to a compatible runner, for example: [test-runner](https://github.com/test-runner-js/cli), [web-runner](https://github.com/test-runner-js/web-runner), [esm-runner](https://github.com/test-runner-js/esm-runner), [mc-runner](https://github.com/test-runner-js/mc-runner).

## Synopsis

Trivial example creating a TOM containing two tests - one pass and one fail. Create a test by supplying a name and test function to `tom.test`. If the function throws or rejects the test is considered a fail.

```js
import Tom from 'test-object-model'
const tom = new Tom()

tom.test('A successful test', function () {
  return 'This passed'
})

tom.test('A failing test', function () {
  throw new Error('This failed')
})

export default tom
```

Save the above to file named `test.mjs`, you can now run this test suite in several ways. For example, you can run it in Node.js by supplying it as input to `esm-runner`.

```
$ esm-runner tmp/synopsis.mjs

Start: 2 tests loaded

✓ synopsis A successful test [This passed]
⨯ synopsis A failing test

   Error: This failed
       at TestContext.<anonymous> (file:///Users/lloyd/Documents/test-runner-js/test-object-model/tmp/synopsis.mjs:10:9)
       ...
       at processTimers (internal/timers.js:475:7)


Completed in 10ms. Pass: 1, fail: 1, skip: 0.
```

To confirm the test suite and the code under test is isomorphic you can run the same TOM in the browser (Chromium) using `web-runner`.

```
$ web-runner tmp/synopsis.mjs

Start: 2 tests loaded

✓ tom A successful test [This passed]
⨯ tom A failing test

   Error: This failed
       at TestContext.<anonymous> (http://localhost:7357/output.mjs:894:9)
       ...
       at http://localhost:7357/output.mjs:2016:21


Completed in 8ms. Pass: 1, fail: 1, skip: 0.
```

## API summary

Supply a name and test function to `tom.test`. If the function throws or rejects the test is considered a fail.

```js
tom.test('name', function () {
  // test
})
```

Skip a test.

```js
tom.skip('name', function () {
  // test
})
```

Skip all but this and any other tests marked as `only`.

```js
tom.only('name', function () {
  // test
})
```

Group.

```js
tom.test('name')
```

## Documentation

* [API reference](https://github.com/test-runner-js/test-object-model/blob/master/docs/API.md)

* * *

&copy; 2018-19 Lloyd Brookes \<75pound@gmail.com\>.
