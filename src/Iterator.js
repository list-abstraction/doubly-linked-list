export default function Iterator(front, back, current) {
	this.front = front;
	this.back = back;
	this.current = current;
}

Iterator.prototype.copy = function () {
	return new Iterator(this.front, this.back, this.current);
};

Iterator.prototype.next = function () {
	// eslint-disable-next-line no-multi-assign
	const c = (this.current = this.current.next);

	return c === this.back ? {done: true} : {value: c.value, done: false};
};

Iterator.prototype.prev = function () {
	// eslint-disable-next-line no-multi-assign
	const c = (this.current = this.current.prev);

	return c === this.front ? {done: true} : {value: c.value, done: false};
};
