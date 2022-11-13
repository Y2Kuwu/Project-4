import { useState, useEffect } from 'react';
import * as employeeAPI from "../../utilities/employee-api"
//import { Link } from 'react-router-dom';

{/* <Link to= {`/UpdateCompany/${company._id}`} ><button className='update'>Update</button></Link> */}
    export default function NewEmployees() {
      const [employees, setEmployees] = useState([]);
      const [hidden, setHidden] = useState(true);


   useEffect(() =>{
    async function employeeCompList() {
      const employees = await employeeAPI.employeeCompList();
      setEmployees(employees);
    }

    employeeCompList();
  }, [])

  async function deleteEmployee(id){
    const deleteEmp = await employeeAPI.deleteEmployee(id);
    window.location.reload()
  }
 //line 46ish add employee to company
return(
 <main>

      <div className='banner'>
      <h1 className='newEmps'>New Employees</h1>      
      <button className = "details" onClick={() => setHidden( y=> !y)}> Detailed view </button>
      </div>
      <div className='employeeWrapWrap'>
      {employees.map(employee => 
        <div className='employeeWrap'>
          <p className='entBody'>{employee.firstName+" "+employee.lastName}</p>
            {!hidden ? 
            <div>
              <p className='entBody'>{employee.title}</p>
              <p className='entBody'>{employee.duties}</p>
              <p className='entBody'>{employee.dob}</p>
              <p className='entBody'>{employee.credentials}</p>
              <p className='entBody'>{employee.notes}</p>
            </div>:null}
         
          <button className='delete' onClick={() => {deleteEmployee(employee._id)}}>Delete</button>
        
                
        <div>
        </div>
        </div>)}
    </div>
    </main>
  );
}