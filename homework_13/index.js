// Задание 1
const car ={
    brand: 'BMW',
    model: 'X5',
    year: 2022
};
console.log(car);

// Задание 2
const carModel= car.model;
const carYear = car['year'];
console.log(carModel);
console.log(carYear);

// Задание 3
car.color = 'red';
console.log(car);

// Задание 4
delete car.year;
const hasYear = 'year' in car;
console.log(hasYear);

// Задание 5
const hasModel = 'model' in car;
console.log(hasModel);

// Задание 6
for (let key in car) {
    console.log(`${key}: ${car[key]}`);  
}

// Задание 7
const keys = Object.keys(car);
console.log(keys);

// Задание 8
const values = Object.values(car);
console.log(values);

// Задание 9
console.log(car.hasOwnProperty('brand'));

// Задание 10
const entries = Object.entries(car);
console.log(entries);
