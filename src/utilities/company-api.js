import sendRequest from './send-request';
const BASE_URL = '/api/company'

export function getCompany() {
    return sendRequest(`${BASE_URL}/company`);
  }