
function getStudent() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "Anri",
                age: 32
            });
        }, 4000); 
    });
}


const studentPromise = getStudent();

studentPromise.then(student => {
    console.log(student.name); 
});