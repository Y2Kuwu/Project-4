import { DateWithoutTime } from 'epoq';
import { useState, useEffect } from 'react';
import * as employeeAPI from "../../utilities/employee-api"
//import { Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

{/* <Link to= {`/UpdateCompany/${company._id}`} ><button className='update'>Update</button></Link> */}
    export default function NewEmployees() {
      const [employees, setEmployees] = useState([]);
      const [hidden, setHidden] = useState(true);
      const space = " ";

   useEffect(() =>{
    async function employeeCompList() {
      const employees = await employeeAPI.employeeCompList();
      setEmployees(employees);
    }

    employeeCompList();
  }, [])

  // async function setDate(d){
  //   let ndate = new DateWithoutTime(d)
  //   console.log(ndate) ;
  // }

  async function deleteEmp(id){
    const deleteEmp = await employeeAPI.deleteEmployee(id);
    window.location.reload()
  }
 //line 46ish add employee to company
return(
 <main>
      
      <div className='banner'>
      <h1 className='newEmps'>New Employees</h1>      
      <button className = "details" onClick={() => setHidden( y=> !y)}> Details </button>
      </div>
      <div className='employeeWrapWrap'>
      {employees.map(employee => 

        <div className='employeeWrap'>
          <p className='entName'>{employee.firstName +space+ employee.lastName}</p>
            {!hidden ? 
            <div className='ent'>
             
                <td className='entBody'>Duties:</td>
                <td className='entBody'>{employee.duties}</td>
                <td className='entBody'>Date of Birth:</td>
                <td className='entBody'>{employee.dob}</td>
                <td className='entBody'>Credentials:</td>
                <td className='entBody'>{employee.credentials}</td>
                <td className='entBody'>Title:</td>
                <td className='entBody'>{employee.title}</td>
                <td className='entBody'>Notes:</td>
                <td className='entBody'>{employee.notes}</td>
            </div>:null}
         
          <button className='delete' onClick={() => {deleteEmp(employee._id)}}>Delete</button>
          <Link to= {`/UpdateEmployee/${employee._id}`} ><button className='update'>Update</button></Link>
                
        <div>
        </div>
        </div>)}
    </div>
    </main>
  );
}