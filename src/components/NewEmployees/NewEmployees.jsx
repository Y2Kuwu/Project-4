import { useState, useEffect } from 'react';
import * as employeeAPI from "../../utilities/employee-api"
//import { Link } from 'react-router-dom';

{/* <Link to= {`/UpdateCompany/${company._id}`} ><button className='update'>Update</button></Link> */}
    export default function NewEmployees() {
      const [employees, setEmployees] = useState([]);
      const [hidden, setHidden] = useState(true);


   useEffect(() =>{
    async function getEmployees() {
      const employees = await employeeAPI.getEmployee();
      setEmployees(employees);
    }

    getEmployees();
  }, [])

  async function handleDeleteEmps(id){
    const deleteEmp = await employeeAPI.deleteEmps(id);
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
          <p className='entBody'>{employee.employeeName}</p>
            {!hidden ? 
            <div>
              <p className='entBody'>{employee.firstName+" "+LastName}</p>
              <p className='entBody'>{employee.role}</p>
              <p className='entBody'>{employee.credentials}</p>
            </div>:null}
         
          <button className='delete' onClick={() => {handleDeleteEmps(employee._id)}}>Delete</button>
        
                
        <div>
        </div>
        </div>)}
    </div>
    </main>
  );
}