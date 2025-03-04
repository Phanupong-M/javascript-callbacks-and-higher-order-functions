// Exercise #1: For Each Function

function forEach(array, operation) {
  for(let i=0; i<array.length; i++){
    operation(array[i]); 
  }
}

let operation = function (i) {
  let updatedSalary = i + 5000;
  newEmployeeSalaries.push(updatedSalary);
};



const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
forEach(employeeSalaries, operation); 
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]







// for (let i=0; i<array.length;i++){
//   array[i] = array[i] + 5000;
//   newEmployeeSalaries.push(array[i]); 
// }