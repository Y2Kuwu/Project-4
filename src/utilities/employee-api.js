import employee from "../../models/employee";
import sendRequest from "./send-request";
import * as employeesAPI from './users-api';
const BASE_URL = '/api/employees';

export function getEmployee() {
    return sendRequest(`${BASE_URL}/findEmployee`)
}

export function createEmployee() {
    return sendRequest(`${BASE_URL}/createEmployee/${employee}`, 'POST');
}