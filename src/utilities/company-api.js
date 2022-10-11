import sendRequest from './send-request';
const BASE_URL = '/api/company'


export function createEmployee(employeeId){
    return sendRequest(`${BASE_URL}/employee${employeeId}`, 'POST');
}

export function getCompany() {
    return sendRequest(`${BASE_URL}/company`);
  }
export function getEmployee(companyId) {
    return sendRequest(`${BASE_URL}/company`);
  }

export function addEmployee() {
    return sendRequest(`${BASE_URL}/company/addEmp`, 'POST');
  }
export function createCompany(){
    return sendRequest(`${BASE_URL}/company`);
}