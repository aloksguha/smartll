var ll = require('../../lib/linkedList');

var linkedList = new ll.singlyLinkedList();
describe("A Singly linkedlist test suite", function() {
  it("should not be undefined.", function() {
    expect(linkedList).not.toBeUndefined();
  });

  console.log(linkedList);

});