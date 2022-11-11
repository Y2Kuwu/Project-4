import sendRequest from './send-request';
const BASE_URL = '/api/employee';

export function employeeCompList() {
    return sendRequest(BASE_URL);
  }

export function createEmployee(employeeForm){
  return sendRequest(BASE_URL, 'POST', employeeForm );
}

export function getEmployeeByAtt(id) {
    return sendRequest(`${BASE_URL}/${id}`);
  }


export function deleteEmployee(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

export function updateEmployee(id, employee) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', employee);
}