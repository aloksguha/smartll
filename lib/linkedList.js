/**
 * Created by alokguha on 06/03/17.
 */
"use strict"
module.exports = {
  singlyLinkedList: function () {
    var list = {}, first, last, size = 0;
    var Node = function (value) {
      this.value = value;
    };

    list.printList = function (node) {
      if (!node) {
        node = first;
      }
      if (node === last) {
        console.log(node.value);
        return;
      }
      console.log(node.value);
      this.printList(node.next)
    }

    list.reverseList = function (node, previousNode) {
      if (!node) {
        node = first;
        previousNode = '';
      }
      if (node === last) {
        var temp = last;
        last = first;
        first = temp;
        first.next = previousNode;
        return;
      }
      var nextNode = node.next;
      node.next = previousNode;
      this.reverseList(nextNode, node);

    }

    list.push = function (value) {
      var node = new Node(value);
      if (first == null) {
        first = last = node;
      } else {
        last.next = node;
        last = node;
      }
      size++;
      return true;
    };


    list.getSize = function () {
      return size;
    }

    list.getFirstNode = function () {
      return first;
    }

    list.getLastNode = function () {
      return last;
    }

    list.getNodeAtIndex = function (index) {
      var i = 0;
      var current = first
      if ((index + 1) >= size) {
        return last;
      }
      if (index === 0) {
        return first;
      } else {
        while (i++ < index) {
          current = current.next
        }
        return current;
      }
    };

    list.setNodeAtIndex = function (index, value) {
      if (index > size) {
        console.log('if');
        return false;
      }
      var node = new Node(value);
      if (index === 0) {
        node.next = first;
        first = node;
      }
      else if (index === size) {
        last.next = node;
        last = node;
      }
      else {
        var nodeAtPreviousIndex = this.getNodeAtIndex(index - 1);
        console.log('> ' + nodeAtPreviousIndex.value);
        node.next = nodeAtPreviousIndex.next;
        nodeAtPreviousIndex.next = node;
      }
      size++;
      return true;
    };


    list.removeNodeAtIndex = function (index) {
      if (index >= size) {
        return false;
      }
      if (index === 0) {
        first = first.next;
      }
      if (index === (size - 1)) {
        last = this.getNodeAtIndex(index - 1);
      }
      else {
        var nodeAtPreviousIndex = this.getNodeAtIndex(index - 1);
        var nodeAtIndex = this.getNodeAtIndex(index);
        nodeAtPreviousIndex.next = nodeAtIndex.next;
      }
      size--;
      return true;
    };
    return list;
  }
}