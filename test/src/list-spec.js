import test from 'ava';
import * as dll from '../../src';

import * as spec from "@list-abstraction/specification" ;
spec.test( test , "DoublyLinkedList" , dll.DoublyLinkedList ) ;
