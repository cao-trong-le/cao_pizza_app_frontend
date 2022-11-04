/* eslint-disable */


class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
        this.index = 0
    }
}

export class CircularDoublyLinkedList {
  constructor(value) {
    this.head = null
    this.tail = null
    this.length = 0
    
    if (value) {
      this.initialize(value)
    }
  }
  
  // used to initialize Circular Doubly Linked List
  initialize(value) {
    // create a node
    const newNode = new Node(value)
    // create a circular reference (points to itself)
    newNode.next = newNode
    newNode.prev = newNode
    // now make both head and tail to point on newNode
    this.head = newNode
    this.tail = newNode

    // set index
   
    // increment length
    this.length++
  }
  
  append(value) {
    // if length is zero, use initialize method instead
    if (this.length === 0) {
      return this.initialize(value)
    }

    // create a new node
    const newNode = new Node(value)
    newNode.index = this.tail.index + 1
    
    // fix newNode pointers to set it as a new tail:
    newNode.prev = this.tail
    newNode.next = this.head
    
    // now update the head and tail accordingly:
    this.head.prev = newNode
    this.tail.next = newNode
    
    // update the tail to be the newNode:
    this.tail = newNode
    // increment length:
    this.length++
  }
  
  prepend(value) {
    // if length is zero, use initialize method instead
    if (this.length === 0) {
      return this.initialize(value)
    }
    
    // create a new node
    const newNode = new Node(value)
    
    // fix newNode pointers to set it as a new head:
    newNode.next = this.head
    newNode.prev = this.tail
    
    // now update the head and tail accordingly:
    this.head.prev = newNode
    this.tail.next = newNode
    
    // update the head to be the newNode:
    this.head = newNode
    
    // increment length
    this.length++
  }
  
  // toArray - loop through nested objects, then return the values in an array
  toArray() {
    const array = []
    // Initialize a currentNode variable pointing to this.head - which will be the starting point for traversal.
    let currentNode = this.head

    do {
    	array.push(currentNode.value)
      currentNode = currentNode.next
      // NOTE: 
      // Since there can be duplicate values in the list, we will be using "Referential equality" instead of comparing Node values as the exit condition (which is figuring out where the head is).
      // When strict equality operator is used in reference types in JS, it checks if compared values referencing the same object instance. This is useful when you like to compare references.
    } while (currentNode !== this.head)
    
    return array
  }
  
  // traverse to index
  traverseToIndex(index) {
    if (index < 0) return undefined
    // keeps track of traversal
    let counter = 0
    // starting point
    let currentNode = this.head

    // traverse to the target index
    while (counter !== index) {
      currentNode = currentNode.next
      counter++
    }

    return currentNode
  }
  
  insert(index, value) {
    // if length is 0, just prepend (add to the beginning)
    if (index === 0) {
      return this.prepend(value)
    }
    // validate the received index parameter:
    if (!index) return 'Index is missing'
    if (typeof index !== 'number') return 'Index should be a number'
    if (index < 0) return 'Index should be bigger than zero'
    
    // if length is too long, just append (add to the end)
    if (index >= this.length) {
      return this.append(value)
    }

    // Initialize a newNode with value recieved.
    const newNode = new Node(value)
    
  	// pick previous index
    const preIdx = this.traverseToIndex(index - 1)
    
    // pick target index
    const targetIdx = preIdx.next
    
    // Set the preIdx next to newNode. This is because newNode replaces the targetIdx's position.
    preIdx.next = newNode
    
    // Set the newNode prev to preIdx. This is because newNode replaces the targetIdx's position.
    newNode.prev = preIdx
    
    // Set the newNode next to targetIdx. This is because newNode replaces the targetIdx's position.
    newNode.next = targetIdx
    
    // Now, targetIdx (which have changed place until this step) will point the prev to the newNode. Again, timing is important on steps!
    targetIdx.prev = newNode
    this.length++
  }
  
  // remove from beginning:
  deleteHead() {
    // check if there is a head value - if not return a warning or null
    if (this.length === 0) return null
    const currHead = this.head
    
    // if one element left
    if (this.length === 1) {
      const headVal = this.head.value
      this.head = null
      this.tail = null
      this.length--
      return headVal
    }
    
     // pick the current head value:
    const headVal = this.head.value
    
    // define newHead as this.head.next
    const newHead = this.head.next
    
    // move the head to next node:
    this.head = newHead
  
    // set the tail next to new this.head:
    this.tail.next = this.head
    
    // set the new previous pointer to updated tail:
    this.head.prev = this.tail
    // decrement length:
    this.length--
    return headVal
  }
  
  // remove from end:
  deleteTail() {
    // check the length - if zero return null
    if (this.length === 0) return null
    
    // If there is only one node left:
    if (this.length === 1) {
      	const tailVal = this.tail.value
        this.head = null
        this.tail = null
        this.prev = null
      	this.length--
        return tailVal
    }
        
    // store the tailVal (to return):
    const tailVal = this.tail.value
    // define new tail by picking the previous node of current tail.    
    const newTail = this.tail.prev

    // prepare for replacement:
    // point newTail.next to this.head
    newTail.next = this.head
    // point this.head.prev to newTail. Now the new tail has correct pointers.
    this.head.prev = newTail
    
    // finalize removal by pointing current tail to newTail
    this.tail = newTail
    // decrement length:
    this.length--
    return tailVal
  }
  
  // Delete from specific index
    delete(index) {
        // if length is 0, just prepend (add to the beginning)
        if (index === 0) {
          return this.deleteHead()
        }

        // validate the received index parameter:
        if (!index) return 'Index is missing'
        if (typeof index !== 'number') return 'Index should be a number'

        // check the length - if zero return a warning
        if (this.length === 0) return 'List is empty'

        // Validation - should not be less than 0
        if (index < 0) return `Minimum idx should be 0 or greater`

        // Check if it is the last element. In that case reset head and tail to null
        if (this.length === 1) {
          	const targetVal = this.head.value
            this.head = null
            this.tail = null
            this.prev = null
          	return targetVal
        }

        // If not define removal style. Removal will be either head, middle or tail.
        let removalType

        if (index === 0) {
            removalType = 'head'
        }
        // When we do a removal from middle on Doubly Linked List, we need to take 3 indexes into account: pre, target and next. To be able to make it work the middle removal with the length prop, we specify the comparison one minus form the length prop compared to a Singly Linked List.
        if (index >= this.length - 1) {
            removalType = 'tail'
        }
        if (index > 0 && index < this.length - 1) {
            removalType = 'middle'
        }

        if (removalType === 'head') {
            return this.deleteHead()
        }

        if (removalType === 'tail') {
            return this.deleteTail()
        }

        if (removalType === 'middle') {
            /*
              Pick the previous Node of targetIdx via traverse.
              Pick the target idx with preIdx.next
              Now make preIdx point to targetIdx next. This will remove the node in middle.
            */
            const preIdx = this.traverseToIndex(index - 1)
            const targetIdx = preIdx.next
            const targetVal = targetIdx.value
            const nextIdx = targetIdx.next
            preIdx.next = nextIdx
            nextIdx.prev = preIdx
            this.length--
            return targetVal
        }
    }
  
  	reverse() {
      // Checkup - if list only contains one item, no need to reverse
      if (this.length === 0) return
      // do not reverse if there is a single element
      if (this.length === 1) return
      
      // We'll use 3 pointers. Prev and Next is empty at the start
      let previousNode = null
      let currentNode = this.head
      let nextNode = null

      // It is quite similar to doubly linked list reverse, the main difference is we can't use null termination as an exit condition - due to dealing with a circular list.
      // To tackle this issue, we will be using "Referential equality" instead of comparing Node values as the exit condition (which is figuring out if we come back to the head node again).
      // When strict equality operator is used in reference types in JS, it checks if compared values referencing the same object instance. This is useful when you need to compare references.
      do {
          // Store next node reference
          nextNode = currentNode.next
         	// Store prev node reference
          previousNode = currentNode.prev

        	// Change next node of the current node so it would link to previous node.
          currentNode.next = previousNode
          currentNode.prev = nextNode
        
        // Move prevNode and currNode nodes one step forward.
          previousNode = currentNode
          currentNode = nextNode
        
        // console.log(previousNode.value, currentNode.value, nextNode.value)
      } while (currentNode !== this.head)
      
        // Set the new tail with this.head (it contains the last item at this point of time):
        this.tail = this.head
     		 // Now reference this head to previousNode (contains the reversed list):
       	this.head = previousNode

      	return this.toArray()
    }
}