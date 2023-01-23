/*
There are 2 arrays: "names1" and "names2". Create a function that:
- returns array, that has names from array names1 excluding names from array names2
*/

const names1 = ['Anastasia', 'Svetlana', 'Nikita', 'Viktar', 'Egor'];
const names2 = ['Svetlana', 'Egor', 'Nikita'];

// update only this function
function findInterception(arr1, arr2) {
  var names3 = [];
  for ( var i = 0; i < arr1.length; i++ ) {
    for ( var e = 0; e < arr2.length; e++ ) {
        if ( arr1[i] === arr2[e]) names3.push( arr1[i] );
    }
}
  console.log(names3); 
  return [names3];
}


module.exports = {
  names1,
  names2,
  findInterception,
};