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

  function get(index) {
    var count = 0;
    var position = head;
    while (count < index && position.next != null) {
      position = position.next;
      count++;
    }
    if (count === index) {
      return position;
    } else {
      return false;
    }
  }

  function remove(number) {

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