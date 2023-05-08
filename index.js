const employee = {
    name: 'John',
    streetAddress: '123 Main St'
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, {[key]: value});
  }
  const newEmployee = updateEmployeeWithKeyAndValue(employee, 'zipCode', '10001');

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    
    const updatedEmployee = { ...employee };
    
    delete updatedEmployee[key];
    
    return updatedEmployee;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }