// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];


   function destructivelyAppendCat(name){
    cats.push(name);
   }

   function destructivelyPrependCat(name){
    cats.unshift(name);
   }
// don't forget to read directions carfully you 
// understand but second guess yourself

function destructivelyRemoveLastCat(name){
    cats.pop(name);

}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name);

}
//start with appends maybe get help

function appendCat(name) {
    let newCats = [...cats]
    newCats.push(name)
    return newCats;
}
// .push puts to the end of the array

function prependCat(name) {
    let newCats = [...cats]
    newCats.unshift(name)
    return newCats;
}
// .unshift puts to the beginnig of array

function removeLastCat(name) {
    let newCats = [...cats]
    newCats.pop(name)
    return newCats
}

function removeFirstCat(name) {
    let newCats = [...cats]
    newCats.shift(name)
    return newCats
}

 






    


