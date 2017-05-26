/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */

var myLinkedList = linkedListGenerator();

function linkedListGenerator(){
  var head = null;
  var tail = null;

  function getHead() {
    return head;

  }

  function getTail() {
    return tail;

  }

  function add(value) {
    var newNode = {
        value: value,
        next: null
      };

      if (head === null && tail === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }

      return newNode;

  }

  function get(number) {
    var count = 0;
    var position = head;
    while (count < number && position.next != null) {
      position = position.next;
      count++;
    }
    if (count === number) {
      return position;
    } else {
      return false;
    }
  }

  function remove(number) {
    var currNode = get(number);
    var prevNode = get(number - 1);

    if (currNode === false){
      return  false;
    }

    if (currNode.next === null){
      tail = prevNode;
    }

    if (number === 0){
      if (currNode.next === null){
        head = null;
        tail = null;
      }else{
      head = head.next;
      }
    }

    prevNode.next = currNode.next;

  }


  function insert(value, number) {


  }
  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert,
  }
}