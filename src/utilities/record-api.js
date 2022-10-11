import sendRequest from './send-request';
const BASE_URL = '/api/record'

export function getRecord() {
    return sendRequest(`${BASE_URL}/company`);
  }