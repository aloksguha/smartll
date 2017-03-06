var singlyLinkedList = function () {
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
  };


  list.getSize = function(){
    return size;
  }

  list.getNodeAtIndex = function(index, next){
    var i = 0;
    var current = first
    if((index+1) >= size){
      return last.value;
    }
    if(index === 0){
      first = current.next;
    }else{
      while(i++ < index){
        current = current.next
      }
      return current.value;
    }
  };

  list.setNodeAtIndex = function(value, index){
    if(index > size){
      return 'Out of bound';
    }else{
        var i = 1, node = new Node(value);
        while(i == index){

        }
    }
  };


  list.removeNodeAtIndex = function(index){
    var i = 0;
    var current = first, previous;
    if(index === 0){
      first = current.next;
    }else{
      while(i++ < index){
        previous = current;
        current = current.next
      }
      previous.next = current.next;
    }
    return current.value;
  };
  return list;
}