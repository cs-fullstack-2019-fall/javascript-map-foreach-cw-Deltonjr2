// javascript-map_foreach_cw
// Problem 1
//
// Ask the user to enter a word. Keep asking them to enter a word until they enter the letter 'q'.
//
//     Problem 2
//
// Make any string array all lower case strings. If you don't remember how to use that Google it.
//
// Challenge
//
// Make any string array return an array of objects with the specified class below
//
// class Student{
//     constructor(name){
//         this.name = name;
//     }
// }
//1.
//
var userinput= prompt ("ask the user to enter a word;Demetria)",
	// isUserInput = "q" is NOT a condition, its variable definition 
While (isuserInput ="q")


{

 alert ("you entered"+ "type something ");

// what is this code block supposed to be attached to?
    {
        userinput = prompt("Enter a word again");

    }
    alert("you pressed 'q'!!!!!)};
    	// close you string and check your code blocks

}


//2.
//Create a forEach to repeat each element in the array twice. On the same line. Example: Kenn Kenn
//
//     var array1 =['Kenn','Kevin', "Erin,",'Autumn'];
//
//           console.log (eachElement+eachElement);

// This is just copied from the in class practice.

var names=['Kevin', 'Kenn', 'Erin'];

names= names.map (function(eachElement){
    return "Hello"+ eachElement

});
console.log(names);

