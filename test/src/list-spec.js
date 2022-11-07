import test from 'ava';
import * as spec from '@list-abstraction/specification';
import * as dll from '../../src/index.js';

spec.test(test, 'DoublyLinkedList', dll.DoublyLinkedList);
