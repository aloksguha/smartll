/**
 * Created by alokguha on 06/03/17.
 */
var ll = require('./lib/linkedList');
module.exports = {
  linkedList: function() {
    return new ll.singlyLinkedList();
  }
}

var lnl = module.exports.linkedList();

lnl.push(0);
lnl.push(1);
lnl.push(2);
lnl.push(3);
lnl.push(4);
lnl.printList();
console.log('Size = '+lnl.getSize());
console.log('First = '+lnl.getFirstNode().value);
console.log('First = '+lnl.getLastNode().value);
console.log();
console.log(lnl.removeNodeAtIndex(4));
console.log('Size = '+lnl.getSize());
console.log('----')
lnl.printList();


