const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];


// Задание 1
const dieselBrand = cars.map((car)=> "brand:" + car.brand + ", " + "isDiesel:" + car.isDiesel );
console.log(dieselBrand);

// Задание 2
const dieselCars = cars.filter((car)=> car.isDiesel == true);
console.log(dieselCars);

// Задание 3
const notDieselCars = cars.filter((car)=> car.isDiesel == false);
console.log(notDieselCars);

// Задание 4
const sum = notDieselCars.reduce((acc, car) => acc + car.price, 0);
console.log(sum);

// Задание 5
cars.forEach ((car)=> car.price *= 1.2);
console.log(cars);

// Задание 6
const updatedDiesel = cars.map((car) => car.isDiesel ? { brand: "Tesla", price: 25000, isDiesel: false } : car);
console.log(updatedDiesel);

