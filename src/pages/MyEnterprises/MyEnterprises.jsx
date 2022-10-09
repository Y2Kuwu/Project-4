import {checkToken} from "../../utilities/users-service";

export default function MyEnterprises() {
    async function handleCheckToken() {
        // calling checkToken from service layer
        const expDate = await checkToken();
        console.log(`expDate is ${expDate}`);
    }

    return (
        <>
            <h1 className = "allEnterprises">My Enterprises</h1>
            <button className = "timeOut" onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    );
}