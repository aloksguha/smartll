var ll = require('../../lib/linkedList');

describe("A Singly linkedlist test suite", function() {
  var linkedList = new ll.singlyLinkedList();
  afterEach(function() {

  });
  beforeEach(function() {

  });

  it("should be having complete structure of list.", function() {
    expect(linkedList).toBeDefined();
    expect(linkedList.printList).toBeDefined();
    expect(linkedList.reverseList).toBeDefined();
    expect(linkedList.push).toBeDefined();
    expect(linkedList.getSize).toBeDefined();
    expect(linkedList.getFirstNode).toBeDefined();
    expect(linkedList.getLastNode).toBeDefined();
    expect(linkedList.getNodeAtIndex).toBeDefined();
    expect(linkedList.setNodeAtIndex).toBeDefined();
    expect(linkedList.removeNodeAtIndex).toBeDefined();
  });

  it("should have 0 as initial size of list", function() {
    expect(linkedList.getSize()).toBe(0);
  });

  it("should have firstNode and lastNode to be undefined", function() {
    expect(linkedList.getFirstNode()).toBeUndefined();
    expect(linkedList.getLastNode()).toBeUndefined();
  });

  it("should push value to list", function() {
    linkedList.push('firstNode');
    expect(linkedList.getSize()).toBe(1);
    expect(linkedList.getFirstNode()).toBeDefined();
    expect(linkedList.getLastNode()).toBeDefined();
    expect(linkedList.getFirstNode().value).toBe('firstNode');
    expect(linkedList.getLastNode().value).toBe('firstNode');
  });

  it("should push second node to list", function() {
    linkedList.push('secondNode');
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.getFirstNode()).toBeDefined();
    expect(linkedList.getLastNode()).toBeDefined();
    expect(linkedList.getFirstNode().value).toBe('firstNode');
    expect(linkedList.getLastNode().value).toBe('secondNode');
  });

  it("should push third node to list", function() {
    linkedList.push('thirdNode');
    expect(linkedList.getSize()).toBe(3);
    expect(linkedList.getFirstNode()).toBeDefined();
    expect(linkedList.getLastNode()).toBeDefined();
    expect(linkedList.getFirstNode().value).toBe('firstNode');
    expect(linkedList.getNodeAtIndex(1).value).toBe('secondNode');
    expect(linkedList.getLastNode().value).toBe('thirdNode');
  });

  it("should remove node at index 1 from list", function() {
    expect(linkedList.getSize()).toBe(3);
    expect(linkedList.getFirstNode().value).toBe('firstNode');
    expect(linkedList.getNodeAtIndex(0).value).toBe('firstNode');
    expect(linkedList.getNodeAtIndex(1).value).toBe('secondNode');
    expect(linkedList.getNodeAtIndex(2).value).toBe('thirdNode');
    expect(linkedList.removeNodeAtIndex(1)).toBeTruthy();
    expect(linkedList.getSize()).toBe(2);
    expect(linkedList.getNodeAtIndex(1).value).toBe('thirdNode');
    expect(linkedList.getLastNode().value).toBe('thirdNode');
  });

  it("should reverse list", function() {
    var tempLinkedList = new ll.singlyLinkedList();
    tempLinkedList.push(1);
    tempLinkedList.push(2);
    tempLinkedList.push(3);
    tempLinkedList.push(4);
    tempLinkedList.reverseList();

    expect(tempLinkedList.getSize()).toBe(4);
    expect(tempLinkedList.getFirstNode().value).toBe(4);
    expect(tempLinkedList.getLastNode().value).toBe(1);
    expect(tempLinkedList.getNodeAtIndex(1).value).toBe(3);
    expect(tempLinkedList.getNodeAtIndex(2).value).toBe(2);
  })


});