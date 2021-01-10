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
        const newData = [];
        for(let i = 0; i < array.length; i++) {
            newData.push(fn(array[i]));
        }
        return newData;
    },// Metodo find
    find : (array, fn) =>{
        let value = undefined;
        for(let i=0; i< array.length; i++){
           if(fn(array[i])){
            value= array[i];
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
    pluck: (array, propertyName) =>{
        let newArray = [];
        for(let i=0; i<array.lenght; i++){
            let value = array[i].propertyName;
            newArray.push(array[i].propertyName);
        }
        return newArray;
    }
}

const nombres = [ {name: 'cesar',age: 25}, {name: 'jorge', age: 29}, {name: 'sandra', age: 32}];

// const double = _.map(numbers, (number) => number*10);
console.log(_.map(numbers, (number) => number*2));