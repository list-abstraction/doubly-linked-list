[js-dll](http://aureooms.github.io/js-dll)
==

Doubly linked list code bricks for Javascript.
Implements the specification in
[js-list-spec](https://github.com/aureooms/js-list-spec).
Parent is
[js-data-structures](https://github.com/aureooms/js-data-structures).

```js
for ( let value of list ) ... ;
```

[![NPM license](http://img.shields.io/npm/l/@aureooms/js-dll.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-dll/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/@aureooms/js-dll.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-dll)
[![Bower version](http://img.shields.io/bower/v/@aureooms/js-dll.svg?style=flat)](http://bower.io/search/?q=@aureooms/js-dll)
[![Build Status](http://img.shields.io/travis/aureooms/js-dll.svg?style=flat)](https://travis-ci.org/aureooms/js-dll)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-dll.svg?style=flat)](https://coveralls.io/r/aureooms/js-dll)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-dll.svg?style=flat)](https://david-dm.org/aureooms/js-dll#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-dll.svg?style=flat)](https://david-dm.org/aureooms/js-dll#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-dll.svg?style=flat)](https://codeclimate.com/github/aureooms/js-dll)
[![NPM downloads per month](http://img.shields.io/npm/dm/@aureooms/js-dll.svg?style=flat)](https://www.npmjs.org/package/@aureooms/js-dll)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-dll.svg?style=flat)](https://github.com/aureooms/js-dll/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-dll.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-dll)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-dll
# or
jspm install npm:@aureooms/js-dll
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-dll
```

### bower
```terminal
bower install @aureooms/js-dll
```

### ender
```terminal
ender add @aureooms/js-dll
```

### jam
```terminal
jam install @aureooms/js-dll
```

### spm
```terminal
spm install @aureooms/js-dll --save
```

### npm
```terminal
npm install @aureooms/js-dll --save
```

## Require
### jspm
```js
let dll = require( "github:aureooms/js-dll" ) ;
// or
import dll from '@aureooms/js-dll' ;
```
### duo
```js
let dll = require( "aureooms/js-dll" ) ;
```

### component, ender, spm, npm
```js
let dll = require( "@aureooms/js-dll" ) ;
```

### bower
The script tag exposes the global variable `dll`.
```html
<script src="bower_components/@aureooms/js-dll/js/dist/dll.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "@aureooms/js-dll" ] , function ( dll ) { ... } ) ;
```

## Use

```js
let List = dll.DoublyLinkedList ;

let list = new List( ) ;

let iterators = [ for ( x of [ 0 , 1 , 2 ] ) list.push( x ) ] ;

[ for ( let element of list ) element ] ; // [ 0 , 1 , 2 ]

list.erase( iterator[1] ) ; // removes `1` from the list

[ for ( let element of list ) element ] ; // [ 0 , 2 ]

// note that other iterators remain valid

iterator[0].current.value = 0 ;
iterator[2].current.value = 2 ;

iterator[0].next( ) ; // { value : 2 , done : false }
iterator[0].next( ) ; // { done : true }

iterator[0].prev( ) ; // { value : 2 , done : false }
iterator[0].prev( ) ; // { value : 0 , done : false }
iterator[0].prev( ) ; // { done : true }

iterator[2].prev( ) ; // { value : 0 , done : false }
iterator[2].prev( ) ; // { done : true }

iterator[2].next( ) ; // { value : 0 , done : false }
iterator[2].next( ) ; // { value : 2 , done : false }
iterator[2].next( ) ; // { done : true }

// SUPPORTED METHODS

// Constructor
List ; // new ( ) -> List

// number of elements in the list
list.length ; // integer

// returns iterator at the beginning of the list
List.prototype[Symbol.iterator] ; // ( ) -> iterator

// inserts value after iterator, returns new iterator
List.prototype.insertAfter ;      // ( iterator , value ) -> iterator

// inserts value before iterator, returns new iterator
List.prototype.insertBefore ;     // ( iterator , value ) -> iterator

// inserts value at the beginning of the list, returns new iterator
List.prototype.unshift ;          // ( value ) -> iterator

// inserts value at the end of the list, returns new iterator
List.prototype.push ;             // ( value ) -> iterator

// erases iterator, returns next iterator
List.prototype.erase ;            // ( iterator ) -> iterator {next}

// erases iterator, returns previous iterator
List.prototype.rerase ;           // ( iterator ) -> iterator {prev}

// erases iterators in [first, last[, returns a copy of last
List.prototype.eraserange ;       // ( first , last ) -> iterator

// erases iterator at the beginning of the list, returns associated value
List.prototype.shift ;            // ( ) -> value

// erases iterator at the end of the list, returns associated value
List.prototype.pop ;              // ( ) -> value

// erases the contents of the list
List.prototype.clear ;            // ( ) -> self

// returns iterator at the beginning of the list
List.prototype.begin ;            // ( ) -> iterator

// returns iterator at the end of the list
List.prototype.end ;              // ( ) -> iterator

// returns reverse iterator at the end of the list
List.prototype.rbegin ;           // ( ) -> iterator

// returns reverse iterator at the beginning of the list
List.prototype.rend ;             // ( ) -> iterator

// returns a copy of self
Iterator.prototype.copy ;         // ( ) -> iterator

// returns a copy of self
ReverseIterator.prototype.copy ;  // ( ) -> iterator

// moves iterator one step forward, standard iterator protocol return object
Iterator.prototype.next ;         // ( ) -> { done , value }

// moves iterator one step backward, standard iterator protocol return object
Iterator.prototype.prev ;         // ( ) -> { done , value }

// moves iterator one step forward, standard iterator protocol return object
ReverseIterator.prototype.next ;  // ( ) -> { done , value }

// moves iterator one step backward, standard iterator protocol return object
ReverseIterator.prototype.prev ;  // ( ) -> { done , value }
```
