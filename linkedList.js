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

      if (head === null) {
        head = newNode;
        tail = newNode;
      } else {
        tail.next = newNode;
        tail = newNode;
      }

      return newNode;

  }

  function get(number) {

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