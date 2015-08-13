
test( "DoublyLinkedList" , function ( assert ) {

	var list = new dll.DoublyLinkedList( ) ;

	var a = list.push( 1 ) ;
	var b = list.push( 2 ) ;
	var c = list.push( 3 ) ;
	var d = list.push( 4 ) ;

	assert.equal( list.length , 4 ) ;

	assert.deepEqual( list.erase( b ) , c ) ;

	assert.equal( list.length , 3 ) ;

	assert.deepEqual( list.rerase( c ) , a ) ;

	assert.equal( list.length , 2 ) ;

	assert.deepEqual( list.erase( a ) , d ) ;

	assert.equal( list.length , 1 ) ;

	assert.deepEqual( list.erase( d ) , list.end( ) ) ;

	assert.equal( list.length , 0 ) ;

} ) ;
