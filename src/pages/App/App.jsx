import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';

import AddEnterprise from '../../components/AddEnterprise/AddEnterprise';
import MyEnterprises from '../MyEnterprises/MyEnterprises';
import MyRecord from '../MyRecord/MyRecord';

import {Routes, Route, Navigate} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

import {getEmployee} from '../../utilities/company-api';
import {getCompany} from '../../utilities/company-api';
import {getRecord} from '../../utilities/record-api';


import CompanyList from '../../components/CompanyList/CompanyList';
import EmployeeList from '../../components/EmployeeList/EmployeeList';
import RecordList from '../../components/RecordList/RecordList';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    const [company, setCompany] = useState(getCompany());
    const [employee, setEmployee] = useState(getEmployee());
    const [record, setRecord] = useState(getRecord());


    return (
        < main className="App">
            {user ?
                <>
                    <CompanyList company={company} setCompany={setCompany}/>
                    <EmployeeList employee={employee} setEmployee={setEmployee}/>
                    <RecordList record={record} setRecord={setRecord}/>

                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/AddEnterprise/new" element={<AddEnterprise user={user} setUser={setUser}/>}/>
                        <Route path="/MyEnterprises" element={<MyEnterprises user={user} setUser={setUser}/>}/>
                        <Route path="/MyRecord" element={<MyRecord user={user} setUser={setUser}/>}/>
                    </Routes>
                </>
                
                :
                <AuthPage setUser={setUser}/>}
        
        </main>
    );
}

export default App;