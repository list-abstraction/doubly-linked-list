import Node from './Node.js';
import Iterator from './Iterator.js';
import ReverseIterator from './ReverseIterator.js';

/**
 * Doubly linked list implementation
 * making use of dummy nodes for the
 * sake of simplicity.
 */
export default function DoublyLinkedList() {
	this.front = new Node(null, null, null);
	this.back = new Node(this.front, null, null);
	this.front.next = this.back;
	this.length = 0;
}

DoublyLinkedList.prototype.insertAfter = function (iterator, value) {
	const prev = iterator.current;

	const node = new Node(prev, prev.next, value);
	prev.next.prev = node;
	prev.next = node;

	++this.length;
	return this.iterator(node);
};

DoublyLinkedList.prototype.insertBefore = function (iterator, value) {
	const next = iterator.current;

	const node = new Node(next.prev, next, value);
	next.prev.next = node;
	next.prev = node;

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

	node.prev.next = node.next;
	node.next.prev = node.prev;

	--this.length;
	return this.iterator(node.next);
};

DoublyLinkedList.prototype.rerase = function (iterator) {
	const node = iterator.current;

	node.next.prev = node.prev;
	node.prev.next = node.next;

	--this.length;
	return this.iterator(node.prev);
};

DoublyLinkedList.prototype.eraserange = function (first, last) {
	const firstnode = first.current;
	const lastnode = last.current;

	lastnode.prev = firstnode.prev;
	firstnode.prev.next = lastnode;

	const it = first.copy();

	while (it.current !== lastnode) {
		--this.length;
		it.next();
	}

	return last.copy();
};

DoublyLinkedList.prototype.reraserange = function (first, last) {
	const firstnode = first.current;
	const lastnode = last.current;

	lastnode.next = firstnode.next;
	firstnode.next.prev = lastnode;

	const it = first.copy();

	while (it.current !== lastnode) {
		--this.length;
		it.next();
	}

	return last.copy();
};

DoublyLinkedList.prototype.shift = function () {
	if (this.length === 0) return null;

	const node = this.front.next;

	this.front.next = node.next;
	node.next.prev = this.front;

	--this.length;

	return node.value;
};

DoublyLinkedList.prototype.pop = function () {
	if (this.length === 0) return null;

	const node = this.back.prev;

	this.back.prev = node.prev;
	node.prev.next = this.back;

	--this.length;

	return node.value;
};

DoublyLinkedList.prototype.clear = function () {
	this.front.next = this.back;
	this.back.prev = this.front;
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
	for (const value of iterable) list.push(value);
	return list;
};

DoublyLinkedList.prototype[Symbol.iterator] = DoublyLinkedList.prototype.begin;
DoublyLinkedList.Node = Node;
DoublyLinkedList.Iterator = Iterator;
DoublyLinkedList.ReverseIterator = ReverseIterator;
DoublyLinkedList.from = from;
