import test from 'ava';
import * as dll from '../../src';

test( "DoublyLinkedList" , t => {

	const list = new dll.DoublyLinkedList( ) ;

	const a = list.push( 1 ) ;
	const b = list.push( 2 ) ;
	const c = list.push( 3 ) ;
	const d = list.push( 4 ) ;

	t.deepEqual( list.length , 4 ) ;

	t.deepEqual( list.erase( b ) , c ) ;

	t.deepEqual( list.length , 3 ) ;

	t.deepEqual( list.rerase( c ) , a ) ;

	t.deepEqual( list.length , 2 ) ;

	t.deepEqual( list.erase( a ) , d ) ;

	t.deepEqual( list.length , 1 ) ;

	t.deepEqual( list.erase( d ) , list.end( ) ) ;

	t.deepEqual( list.length , 0 ) ;

} ) ;
