import {checkToken} from "../../utilities/users-service";

export default function tokenTime({user, setUser}) {  //change params
   
    async function handleCheckToken() {
        const expDate = await checkToken();
        alert(`Expiration date is ${expDate}`);
    }
    
    return (
        
        <>
            <p className="Profile">Profile</p>
            <button className = "timeOut" onClick={handleCheckToken}>Check When My Login Expires</button>
           
        </>
    );
}
