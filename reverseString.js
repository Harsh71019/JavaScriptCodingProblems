function reverse (str) {
    //check the input
    if(!str || str.length < 2 || typeof str !== 'string') {
        return 'Thats not good' 
    }
   const backwards = [];
   const totalItems = str.length - 1;

   for(let i = totalItems; i >= 0 ; i--) {
       backwards.push(str[i]);

   }
   console.log(backwards)


   return backwards.join('') 
}

reverse('Hi my name is Harsh')

//Using reverse method in JavaScript
 
function reverse2 () {
    return str.split('').reverse().join("")
}

reverse2('Hi my name is Hareeeeeesh')

//ES6

const reverse3 = str => [...str].reverse().join("");
