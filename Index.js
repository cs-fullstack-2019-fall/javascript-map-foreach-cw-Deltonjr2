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
While (isuserInput ="q")


{

 alert ("you entered"+ "type something ");


    {
        userinput = prompt("Enter a word again");

    }
    alert("you pressed 'q'!!!!!)};

}

//2.
//Create a forEach to repeat each element in the array twice. On the same line. Example: Kenn Kenn
//
//     var array1 =['Kenn','Kevin', "Erin,",'Autumn'];
//
//           console.log (eachElement+eachElement);

var names=['Kevin', 'Kenn', 'Erin'];

names= names.map (function(eachElement){
    return "Hello"+ eachElement

});
console.log(names);

