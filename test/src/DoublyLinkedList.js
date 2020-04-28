import test from 'ava';
import * as dll from '../../src';

test( "DoublyLinkedList" , function ( assert ) {

	var list = new dll.DoublyLinkedList( ) ;

	var a = list.push( 1 ) ;
	var b = list.push( 2 ) ;
	var c = list.push( 3 ) ;
	var d = list.push( 4 ) ;

	assert.equal( list.length , 4 ) ;

	assert.t.deepEqual( list.erase( b ) , c ) ;

	assert.equal( list.length , 3 ) ;

	assert.t.deepEqual( list.rerase( c ) , a ) ;

	assert.equal( list.length , 2 ) ;

	assert.t.deepEqual( list.erase( a ) , d ) ;

	assert.equal( list.length , 1 ) ;

	assert.t.deepEqual( list.erase( d ) , list.end( ) ) ;

	assert.equal( list.length , 0 ) ;

} ) ;
