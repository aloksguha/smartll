# Smart LinkedList
This repository have codes for node module "smart-ll" aka "Smart linked-list".


## Installation
```bash
npm install smart-ll --save
```
## Features

  * Simplest yet powerful implementation of Linked-List data structure.
  * Focus on high performance
  * Additional features as "reverse list"
  * Super-high test coverage

## Basic Usage
```js
var smartll = require('smart-ll');

//this will intialize a new LinkedList Object and assign it to var linkedList
var linkedList = smartll.linkedList();
```
### List Node Structure
List will be form in following node format
```js

var node = {
	value : '<value>',
	next : <next-node>
}

```

## Method Description

#### insert(value)
This function will insert any data to end of the list.

```js
var smartll = require('smart-ll');

var linkedList = smartll.linkedList();
linkedList.insert(1);
linkedList.insert('string');
linkedList.insert([2,3,4]);
linkedList.insert({'name':'alok'});
```

#### setNodeAtIndex(index {integer}, value)
This function will insert any data at specific index of the list.
```js
var smartll = require('smart-ll');

var linkedList = smartll.linkedList();
linkedList.setNodeAtIndex(1,1);
linkedList.setNodeAtIndex(1,'string');
linkedList.setNodeAtIndex(4,[2,3,4]);
linkedList.setNodeAtIndex(6, {'name':'alok'});
```

#### getNodeAtIndex(index {integer})
This function will return node (refer node structure above) at specific index of the list.
```js
linkedList.setNodeAtIndex(4);
```

#### getSize()
This function will return current size of the list.
```js
linkedList.getSize();
```
#### getFirstNode()
This function will return first node of the list.
```js
linkedList.getFirstNode();
```
#### getLastNode()
This function will return last node of the list.
```js
linkedList.getLastNode();
```
#### removeNodeAtIndex(index {integer})
This function will delete node at specific index of the list.
```js
var smartll = require('smart-ll');
var linkedList = smartll.linkedList();
linkedList.insert(1);

linkedList.removeNodeAtIndex(0);

console.log(linkedList.getSize()) //it'll print zero as inserted node is removed.
```
#### reverseList()
This function will reverse the list.
```js
var smartll = require('smart-ll');
var linkedList = smartll.linkedList();
linkedList.insert(1);
linkedList.insert('2');
linkedList.insert('three');
linkedList.insert({'value':'four'});

//it will completely reverse above list.
linkedList.reverseList();

#### printList
This function will print all nodes's values of the list over console.
```js
linkedList.printList();
```

please refer spec folder for jasmine tests.

