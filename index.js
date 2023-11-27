const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph")
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop()
}
//=> both remove the last or first so no need to declare what im
//=> removing

function destructivelyRemoveFirstCat(name) {
    cats.shift()
}

function appendCat(name) {
   const catsArray = ["Milo", "Otis", "Garfield"]
   const newCatsArray = [...catsArray, name];
    return newCatsArray;
    // when it says return use return!!!
   
}
function prependCat(name) {
    const catsArray = ["Milo", "Otis", "Garfield"]
    const newCatsArray = [name, ...catsArray]
        return newCatsArray;
}

function removeLastCat(name){
    const catsArray = ["Milo", "Otis", "Garfield"]
    const newCatsArray = catsArray.slice(0,-1)
    // dont forget to put the 0 and put all the parameters
    return newCatsArray;
}
    function removeFirstCat() {
        const catsArray = ["Milo", "Otis", "Garfield"]
        const newCatsArray = catsArray.slice(1);
        
        return newCatsArray;
        
    }
    // had the right code extra curly braces 


