import './App.css';
import {useState} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
//pages
import AuthPage from '../AuthPage/AuthPage';
import MyRecord from '../MyRecord/MyRecord';
import MyEnterprises from '../MyEnterprises/MyEnterprises';
//

// Import the following components
import NavBar from '../../components/NavBar/NavBar';
import AddEnterprise from '../AddEnterprise/AddEnterprises';
import CompanyList from '../../components/CompanyList/CompanyList';
// import EmployeeList from '../../components/EmployeeList/EmployeeList';
import RecordList from '../../components/RecordList/RecordList';

//gets
import {getUser} from '../../utilities/users-service';

// import {getEmployee} from '../../utilities/company-api';
import {getCompany} from '../../utilities/company-api';
// import {getRecord} from '../../utilities/record-api';
//



function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    const [company, setCompany] = useState(getCompany());
    // const [employee, setEmployee] = useState(getEmployee());
    // const [record, setRecord] = useState(getRecord());


    return (
      
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/AddEnterprise" element={<AddEnterprise user={user} setUser={setUser}/>}/>
                        <Route path="/MyEnterprises" element={<MyEnterprises user={user} setUser={setUser}/>}/>
                        <Route path="/MyRecord" element={<MyRecord user={user} setUser={setUser}/>}/>
                    </Routes>
                    
                    {/* <CompanyList company={company} setCompany={setCompany}/>
                    <EmployeeList employee={employee} setEmployee={setEmployee}/>
                    <RecordList record={record} setRecord={setRecord}/> */}
                </>
                
                :
                <AuthPage setUser={setUser}/>}
        
        </main>
    );
}

export default App;