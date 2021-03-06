const numbers = [3,6,5];

_ = {// Metodo forEach
    each: (array, fn) => {
        for(let i = 0; i < array.length; i++) {
            fn(array[i], i, array)
        }
    },// metodo filter
    filter: (array, fn) => {
        const filteredData = [];
        for(let i = 0; i < array.length; i++) {
            if(fn(array[i], i, array)) {
                filteredData.push(array[i]);
            }
        }
        return filteredData;
    }, // Metodo map
    map: (array, fn) => {
        let newArray = [];
        for(let i = 0; i < array.length; i++) {
            newArray.push(fn(array[i]));
        }
        return newArray;
    },// Metodo find
    find : (array, fn) =>{
        let value = undefined;
        for(let i=0; i< array.length; i++){
           if(fn(array[i])){
            value = array[i];
            return value;
           }
        }
        return value;
    },// Metodo findIndex
    findIndex : (array,fn) => {
        let index = -1;
        for(let i=0; i<array.length; i++){
            if(fn(array[i])){
                index = i;
                return index;
            }
        }
        return index;
    },
    // Metodo contain, ademas queria saber la posicion en donde se encuentra el valor.
    contain : (array, value) =>{
        let index = -1;
        for(let i=0; i<array.length; i++){
            if(array[i] === value){
                index = i;
                console.log('Position: '+ index);
                return true; 
            }
        }
        console.log('No exist value');
        return false;
    },
    pluck: (array, fn) => {
        let ces = [];
        for(let i in array){
            if(array[i].hasOwnProperty(fn)){
                ces.push(array[i][fn]);
            }
        }
        return ces
    },
    without :(array, value) => {
        for(let i in array){
            if(array[i] === value){
                array.splice(i, array[i]);
            }
        }
        return  array;
    }
}
let users = [{name: 'cesar', age: 25}, {name: 'sandra', age: 31}, {name: 'jorge', age: 29}];
console.log(_.pluck(users, 'name'));




