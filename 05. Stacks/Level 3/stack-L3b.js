
/*
  Continued from stack-L3.js

  In the previous challenge, you modified the Double Stack using a dynamic array or
   vector with specialized resize.  In this challenge, you will use a DoublyLinkedList.

  Your objective is to:

    [ ] Complete the implementation of a DoubleStack class
    [ ] .storage property to hold the items on the stack using a Doubly Linked List
    [ ] .push() function to push a value from the back
    [ ] .pop() function to push a value from the back
    [ ] .pushFront() function to push a value from the front
    [ ] .popFront() function to push a value from the front
    [ ] .length property to return the total size used

    [ ] The storage cannot resize beyond max

  BONUS:

    [ ] Observe, was it easier than using a dynamic array?  More difficult?  Be able
          to explain why
    [ ] What are the differences in resize behavior?  Which do you prefer.  Be able
          to explain why

  REFACTOR (use stack-L3c.js):

    [ ] .push property that returns the object { front: function()..., back: function() }
          to replace push() and pushFront().  It can be used like: stack.push.front(value),
          or stack.pop.back(), etc.

    [ ] .length property that returns the object { front: _, back: _, size: _} that returns
          the current length of the front stack, back stack, and total size.

  NOTE: Do not use any built-in features

*/

var DoubleStack = function(initialCapacity) {
  this.storage = new DoublyLinkedList();
  this.max = 1 << 5;                                // max = 32
  this.length = 0;
  this.lengthFront = 0;
};

DoubleStack.prototype.push = function(value) {
  // ...
};

DoubleStack.prototype.pop = function() {
  // ...
};

DoubleStack.prototype.pushFront = function(value) {
  // ...
};

DoubleStack.prototype.popFront = function() {
  // ...
};