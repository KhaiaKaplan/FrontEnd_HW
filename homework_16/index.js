// Задача 1:
function filterNamesWithA(names) {
    return names.filter(name => name[0].toLowerCase() === 'a'); 
}

const namesArray = ["James", "Aron", "Garry", "alex", "jacke", "Anne"];
const result = filterNamesWithA(namesArray);
console.log(result);

// Задача 2:
function sumNumbers(numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
}

const numbersArray = [12, 23, 53, 1, 33]
const result1= sumNumbers(numbersArray);
console.log(result1);

// Задача 3:
function reverseArray(numbers) {
    return numbers.reverse(); 
}

const numbersArray1 = [1, 2, 3, 4, 5];
const result2 = reverseArray(numbersArray1);
console.log(result2); 

// Задача 4:
function transformObjectToArray(obj) {
    return Object.keys(obj).map(key => {
        return {
            name: obj[key].name,
            age: obj[key].age,
            id: key
        };
    });
}

const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17
    }
};

const result3 = transformObjectToArray(customers);
console.log(result3);

// Задача 5:
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

const obj1 = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5'
};

const obj2 = {
    key3: 'new_value3',
    key4: 'new_value4',
    key5: 'new_value5',
    key6: 'value6',
    key7: 'value7'
};

const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);
