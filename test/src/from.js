import test from 'ava';
import {from, DoublyLinkedList} from '#module';

test('from is DoublyLinkedList.from', (t) => {
	t.is(from, DoublyLinkedList.from);
});

const macro = test.macro({
	exec(t, sequence) {
		const expected = Array.from(sequence);
		const list = DoublyLinkedList.from(sequence);
		t.deepEqual(Array.from(list), expected);
	},
	title(title, sequence) {
		return title ?? `from(${JSON.stringify(sequence)})`;
	},
});

test(macro, []);
test(macro, [1]);
test(macro, [1, 2, 3]);
test(macro, '');
test(macro, 'a');
test(macro, 'ab');
