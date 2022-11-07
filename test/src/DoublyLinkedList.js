import test from 'ava';
import * as dll from '../../src/index.js';

test('DoublyLinkedList', (t) => {
	const list = new dll.DoublyLinkedList();

	const a = list.push(1);
	const b = list.push(2);
	const c = list.push(3);
	const d = list.push(4);

	t.is(list.length, 4);

	t.deepEqual(list.erase(b), c);

	t.is(list.length, 3);

	t.deepEqual(list.rerase(c), a);

	t.is(list.length, 2);

	t.deepEqual(list.erase(a), d);

	t.is(list.length, 1);

	t.deepEqual(list.erase(d), list.end());

	t.is(list.length, 0);
});
