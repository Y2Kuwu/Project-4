import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';

import AddEnterprise from '../AddEnterprise/AddEnterprise';
import MyEnterprises from '../MyEnterprises/MyEnterprises';
import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/AddEnterprise/new" element={<AddEnterprise user={user} setUser={setUser}/>}/>
                        <Route path="/MyEnterprises" element={<MyEnterprises user={user} setUser={setUser}/>}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>}
        <Route path='/'></>
        </main>
    );
}

export default App;