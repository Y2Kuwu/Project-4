import {useState} from "react";
import CreateEmployee from "../../components/createEmployee/createEmployee";


export default function EmployeePage({setEmployee}) {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <main>
            <h1 className="fb">FateBook</h1>
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
            {showSignUp ?
                <SignUpForm setUser={setUser}/>
                :
                <LoginForm setUser={setUser}/>
            }
        </main>
    );
}