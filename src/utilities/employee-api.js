import sendRequest from "./send-request";
const BASE_URL = '/api/employees';

export async function signUp(userData) {
    try {
        const token = await usersAPI.signUp(userData);
        // save the data to local storage
        localStorage.setItem('token', token);
        return getUser();
    } catch {
        throw new Error("Invalid Sign Up");
    }
}