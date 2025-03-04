// Exercise #1: For Each Function

function forEach(salary,newSalary, operation) {
  return operation(salary,newSalary)
}

const increaseSalary = (salary,newSalary) => {
  for (let i = 0; i < salary.length; i++){
   newSalary.push(salary[i] + 5000)
  }
 return newSalary
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries,newEmployeeSalaries,increaseSalary); // [25005, 45000, 37000, 19500, 349000]
console.log(newEmployeeSalaries)