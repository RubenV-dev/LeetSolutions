// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
// and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:
//         2->4->3
//         5->6->4
//         ________
// Result: 7->0->8     

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// _______________________________________________________________________________________________________________________________

//We will need to read the linked list from the end to the beginning and extract the number that we will be adding.
//we will do this by traversing the linkedList and adding each node to a string.
//Once we have the extracted number we will proceed to add it together and then finally transform that answer to a another linkedList

//singly linked list node structure
function ListNode(val) {
    this.val = val;
    this.next = null;
}
//linkedList function will take an array and transform it to a LinkedList of listnodes
function linkedList(arr) {
  //start the list with the first item in the array. This will be the head of the list.
  let list = new ListNode(arr[0])
  let selectedNode = list
  //iterate through the array beginning at index 1 since index 0 was already inserted into the list. Continously add the current 
//iteration to the .next value of the selected node and change the selected node to the node that you just added.
  for (let i = 1; i < arr.length; i++) {
      selectedNode.next = new ListNode(arr[i])
      selectedNode = selectedNode.next
  }
  return list
}
//traverse list will take a linkedlist and transform it to a stringified version of the nodes.
const traverseList = (list) => {
  //assign current to the head of the list. It represents that node which has references to other nodes in its .next value.
  let current = list
  let stringedNumber = ""
  //keep traversing the nodes until you get a value of null which marks the end of the list.
  while (current !== null) {
      //add each value to the beginning of the string since the problem mentioned it is stored in reverse order.
      stringedNumber = current.val + stringedNumber
      current = current.next
  }
  return stringedNumber
}
//addTwo Numbers takes two linkedLists. It will traverse it using the traverseList function and save it to memory. We will
//add the two strings using the addFunc function. Once we have the answer we will reverse its order and make it into a linkedList.
var addTwoNumbers = function(l1, l2) {
    let revL1String = traverseList(l1)
    let revL2String = traverseList(l2) 
    let stringSum = addFunc(revL1String, revL2String)
    let reverseSumArr = stringSum.split("").reverse()
    return linkedList(reverseSumArr)

}

//addFunc will add two strings in a way that is very similar to the long addition we would do in elementary school. we start at the end
//of a given string and add numbers, if the value is greater than 1 digit, we take the the last value, put it into our solution
//and carry over any left over into the next values that we add.
// Example: 254
//        + 123
//        ______
//          377

// IMPORTANT: Reason to use the addFunc is because of javascripts MAX_SAFE_INTEGER which is the largest number it can display before
// implicitly converts the number to e-notation ex: 8.6 * e^20. This function allows us to take large inputs and allows the program
// to scale well.
const addFunc = (str1, str2) => {
    let sum = ""
    //make sure the str2 is the longest string which always gets placed on top when adding. if its not, switch the value of str1 and 2
    if (str2.length > str1.length) {
        let temp = str2
        str2 = str1
        str1 = temp
    }
    //carry will hold anything carried over when adding, a and b hold the current value for each string that we add, temp holds
    // the temporary sum of a and b as well as the carry, sumdigit will be the number that gets passed into the solution each time 
    // as long as we arent at the end of str1, if we are then we will add the temp value because there are no more numbers to add. 
    let carry = 0
    let a;
    let b;
    let temp;
    let sumDigit;
    for (let i=0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i))
        b = parseInt(str2.charAt(str2.length - 1 - i))
        b = (b) ? b : 0;
        temp = (carry + a + b).toString()
        sumDigit = temp.charAt(temp.length-1)
        carry = parseInt(temp.substr(0, temp.length-1))
        carry = (carry) ? carry : 0
 
        sum = (i === str1.length - 1) ? temp + sum : sumDigit + sum
    }
    return sum;
 }
