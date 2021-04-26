# Examples

> More examples in [the test files](https://github.com/make-github-pseudonymous-again/js-dll/tree/master/test/src).

```js

import { DoublyLinkedList as List } from '@aureooms/js-dll' ;

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
