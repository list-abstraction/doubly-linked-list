import {
	Node,
	_concat,
	_erase,
	_extend,
	_remove,
	_insertAfter,
	_insertBefore,
} from '@data-structure-algebra/doubly-linked-list';

import Iterator from './Iterator.js';
import ReverseIterator from './ReverseIterator.js';

/**
 * Doubly linked list implementation
 * making use of dummy nodes for the
 * sake of simplicity.
 */
export default function DoublyLinkedList() {
	this.front = new Node(null, null, null);
	this.back = new Node(null, this.front, null);
	this.front.next = this.back;
	this.length = 0;
}

DoublyLinkedList.prototype.insertAfter = function (iterator, value) {
	const prev = iterator.current;

	const node = _insertAfter(prev, value);

	++this.length;
	return this.iterator(node);
};

DoublyLinkedList.prototype.insertBefore = function (iterator, value) {
	const next = iterator.current;

	const node = _insertBefore(next, value);

	++this.length;
	return this.iterator(node);
};

DoublyLinkedList.prototype.unshift = function (value) {
	return this.insertAfter(this.begin(), value);
};

DoublyLinkedList.prototype.push = function (value) {
	return this.insertBefore(this.end(), value);
};

DoublyLinkedList.prototype.erase = function (iterator) {
	const node = iterator.current;

	_remove(node);

	--this.length;
	return this.iterator(node.next);
};

DoublyLinkedList.prototype.rerase = function (iterator) {
	const node = iterator.current;

	_remove(node);

	--this.length;
	return this.iterator(node.prev);
};

DoublyLinkedList.prototype.eraserange = function (first, last) {
	const firstnode = first.current;
	const lastnode = last.current;

	_erase(firstnode, lastnode);

	let x = first.current;

	while (x !== lastnode) {
		--this.length;
		x = x.next;
	}

	return last.copy();
};

DoublyLinkedList.prototype.reraserange = function (first, last) {
	const firstnode = first.current;
	const lastnode = last.current;

	_concat(lastnode, firstnode.next);

	let x = first.current;

	while (x !== lastnode) {
		--this.length;
		x = x.prev;
	}

	return last.copy();
};

DoublyLinkedList.prototype.shift = function () {
	if (this.length === 0) return null;

	const node = this.front.next;
	_remove(node);

	--this.length;

	return node.value;
};

DoublyLinkedList.prototype.pop = function () {
	if (this.length === 0) return null;

	const node = this.back.prev;
	_remove(node);

	--this.length;

	return node.value;
};

DoublyLinkedList.prototype.clear = function () {
	_concat(this.front, this.back);
	this.length = 0;
	return this;
};

DoublyLinkedList.prototype.iterator = function (node) {
	return new Iterator(this.front, this.back, node);
};

DoublyLinkedList.prototype.riterator = function (node) {
	return new ReverseIterator(this.front, this.back, node);
};

DoublyLinkedList.prototype.begin = function () {
	return this.iterator(this.front);
};

DoublyLinkedList.prototype.end = function () {
	return this.iterator(this.back);
};

DoublyLinkedList.prototype.rbegin = function () {
	return this.riterator(this.back);
};

DoublyLinkedList.prototype.rend = function () {
	return this.riterator(this.front);
};

const from = (iterable) => {
	const list = new DoublyLinkedList();
	const last = _extend(list.front, iterable);
	_concat(last, list.back);
	return list;
};

DoublyLinkedList.prototype[Symbol.iterator] = DoublyLinkedList.prototype.begin;
DoublyLinkedList.Node = Node;
DoublyLinkedList.Iterator = Iterator;
DoublyLinkedList.ReverseIterator = ReverseIterator;
DoublyLinkedList.from = from;
