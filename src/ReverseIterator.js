import Iterator from './Iterator.js';

export default function ReverseIterator(front, back, current) {
	this.front = front;
	this.back = back;
	this.current = current;
}

ReverseIterator.prototype.copy = function () {
	return new ReverseIterator(this.front, this.back, this.current);
};

ReverseIterator.prototype.prev = Iterator.prototype.next;
ReverseIterator.prototype.next = Iterator.prototype.prev;
