# JavaScript lecture

## A. Intro
- JavaScript dynamic language, TypeScript, CofeeScript
- IDE - VSCode, WebStorm, Atom, Sublime
  - plugins
- EcmaScript (ES5, ES6, ES7) and browser support
  - mention Babel (<https://babeljs.io/repl/>)
- Mac, Unix, Windows

## B. Install Node.js
- brief description
- install from web (LTS vs Current support) (<https://nodejs.org/en/>)
- npm (<https://www.npmjs.com>)
  - update npm (`npm update npm -g`)
  - install nvm
- nvm (<https://www.npmjs.com/package/nvm>)
  - Ubuntu: <https://www.liquidweb.com/kb/how-to-install-nvm-node-version-manager-for-node-js-on-ubuntu-12-04-lts/>
  - Mac: `brew install nvm`
  - `nvm install 7.9.0`
  - `nvm uninstall 7.7.1`
  - `nvm alias default 7.9.0`
- show node REPL (Read-Eval-Print-Loop)

## C. JavaScript

  ### 1. `use strict` 
  - undeclared variable demo
  - `Object.freeze()` demo
  - `--use_strict` flag

  ### 2. Functions & Variables
  - `var`, `let`, `const`
  - standalone function, camelCase

  ### 3. Objects
  - fields:
    - static name (key)
    - dynamic name
    - via `Object.defineProperty`
      - enumerable - visible in `for .. in` iterations
      - writable - getter, setter
      - configurable - true when it can be deleted or property descriptor changed
    - via Symbols

  - `for .. in` loop
  - functions:
    - separate - defines own this
    - object functions
    - arrow functions

  ### 4. `this` binding

  ### 5. strict operators `==` vs `===`

  ### 6. Prototypes
  - via Object.create
  - `for .. in` loop and `hasOwnProperty`
  - `Object.keys`, `Object.values` & `Object.entries`
  - via constructor Function
  - via Classes

  ### 7. Closures

  ### 8. Arrays, Map, Set
  - basic Array functions
    - push
    - pop
    - shift - takes from the beginning
    - unshift - pushes to the beginning
    - filter - true, to have it in the result array
    - map
    - reduce
    - slice(index, index) --> returns a new array, original unchanged
    - splice(index, count, replacement) --> returns piece, original changed
    - includes
    - indexOf
    - every, some
  - Map
  - Set
