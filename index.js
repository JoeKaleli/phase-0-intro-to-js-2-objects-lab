// Write your solution in this file!

let employee = {
    name:"John Joe",
    streetAddress:"123 Main Street"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress","990, Kiambu");

console.log(updatedEmployee);

console.log(employee);



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetName","Thigio");

console.log(employee);

function deleteFromEmployeeByKey(employee, key) {
    //Create a new object using the spread operator, excluding the specific key

    const newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, "streetAddress");

console.log(employeeWithoutStreetAddress);

console.log(employee);
