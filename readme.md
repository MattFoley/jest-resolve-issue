
This repo shows the issue I've described in [this issue](https://github.com/facebook/jest/issues/1187) on the Jest repository.

When package.json devDepencies setting for Jest CLI is `"jest-cli": "^0.9.0"`

```
Tjs-MBP:jest-resolve-issue tfallon$ jest
Using Jest CLI v0.9.2, jasmine2, babel-jest
 PASS  ObjectModel/__tests__/car-spec.js (0.236s)
 PASS  ObjectModel/__tests__/truck-spec.js (0.233s)
2 tests passed (2 total in 2 test suites, run time 1.65s)
--------------|----------|----------|----------|----------|----------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------|----------|----------|----------|----------|----------------|
 ObjectModel/ |    92.31 |       60 |      100 |      100 |                |
  index.js    |    92.31 |       60 |      100 |      100 |                |
  truck.js    |    92.31 |       60 |      100 |      100 |                |
--------------|----------|----------|----------|----------|----------------|
All files     |    92.31 |       60 |      100 |      100 |                |
--------------|----------|----------|----------|----------|----------------|

```

When package.json devDepencies setting for Jest CLI is `"jest-cli": "^12.1.1"`:

```
Tjs-MBP:jest-resolve-issue tfallon$ jest
Using Jest CLI v12.1.1, jasmine2, babel-jest
watchman warning:  Recrawled this watch 1 times, most recently because:
/Users/tfallon/Documents/Code/jest-resolve-issue: kFSEventStreamEventFlagUserDropped
To resolve, please review the information on
https://facebook.github.io/watchman/docs/troubleshooting.html#recrawl
To clear this warning, run:
`watchman watch-del /Users/tfallon/Documents/Code/jest-resolve-issue ; watchman watch-project /Users/tfallon/Documents/Code/jest-resolve-issue`

 FAIL  ObjectModel/__tests__/car-spec.js
● Runtime Error
  - Error: Cannot find module 'Car' from 'car-spec.js'
        at Resolver.resolveModule (node_modules/jest-resolve/src/index.js:117:17)
        at Runtime._resolveModule (node_modules/jest-cli/src/Runtime/Runtime.js:214:32)
        at Object.<anonymous> (ObjectModel/__tests__/car-spec.js:3:1)
        at jasmine2 (node_modules/jest-jasmine2/src/index.js:252:16)
 FAIL  ObjectModel/__tests__/truck-spec.js
● Runtime Error
  - Error: Cannot find module 'Truck' from 'truck-spec.js'
        at Resolver.resolveModule (node_modules/jest-resolve/src/index.js:117:17)
        at Runtime._resolveModule (node_modules/jest-cli/src/Runtime/Runtime.js:214:32)
        at Object.<anonymous> (ObjectModel/__tests__/truck-spec.js:3:1)
        at jasmine2 (node_modules/jest-jasmine2/src/index.js:252:16)
2 test suites failed, 0 tests passed (0 total in 2 test suites, run time 3.564s)
----------|----------|----------|----------|----------|----------------|
File      |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
----------|----------|----------|----------|----------|----------------|
----------|----------|----------|----------|----------|----------------|
All files |      100 |      100 |      100 |      100 |                |
----------|----------|----------|----------|----------|----------------|
```

I don't think the watchman recrawl warning has anything to do with the problem, I see those every so often.
