const strings = ['a','b','c','d']

//4 * 4 = 16 bytes of  storage 

strings[2]

//push - add something at end of array

strings.push('e'); //O(1)

console.log(strings)

//pop - remove the last item from the string

strings.pop();
console.log(strings) //O(1)

//Unshift Insert items at the start of array 

strings.unshift('X') //O(n)
console.log(strings)

//Splice Add Items middle of the array

strings.splice(2, 0 ,'alien');
console.log(strings) //O(n)


