import './App.css';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
//pages
import {Redirect} from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';

// Import the following components
import NavBar from '../../components/NavBar/NavBar';
//import AllEnterprises from '../../components/AllEnterprises/AllEnterprises';
import NewEmployees from '../../components/NewEmployees/NewEmployees';
import MyEnterprises from '../../components/MyEnterprises/MyEnterprises';
import AddEnterprise   from '../../components/AddEnterprise/AddEnterprise';
import UpdateEnterprise from '../../components/UpdateEnterprise/UpdateEnterprise';
import UpdateEmployee from '../../components/UpdateEmployee/UpdateEmployee';
import CreateEmployee from '../../components/CreateEmployee/CreateEmployee';
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
                        <Route path="/AddEnterprise" element={<AddEnterprise user={user} setUser={setUser}/>}/>
                        <Route path="/MyEnterprises" element={<MyEnterprises user={user} setUser={setUser}/>}/>
                        <Route path="/CreateEmployee" element={<CreateEmployee user={user} setUser={setUser}/>}/>
                        <Route path="/NewEmployees" element={<NewEmployees user={user} setUser={setUser}/>}/>

                        <Route path="/UpdateEnterprise/:id" element={<UpdateEnterprise user={user} setUser={setUser}/>}/>
                        <Route path="/UpdateEmployee/:id" element={<UpdateEmployee user={user} setUser={setUser}/>}/>
                    </Routes>
                    
               
                  
                </>
                
                :
                <AuthPage setUser={setUser}/>}
        
        </main>
    );
}

export default App;


{/* <Route path="/AllEnterprises" element={<AllEnterprises user={user} setUser={setUser}/>}/> */}