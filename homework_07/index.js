
const names = ["Семен", "Иван", "Петр", "Татьяна"];

const age = [18, 27, 74, 34];

let result = [];

for (let i = 0; i < names.length; i++) {
    result.push(names[i] + " " + age[i] + " лет/годов");
    
}

console.log(result);
