import { useState, useEffect } from 'react';
import * as employeeAPI from "../../utilities/employee-api"
import { Link } from 'react-router-dom';


    export default function NewEmployees() {
      const [companies, setEmployees] = useState([]);
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
      <h1 className='newEmps'>My Enterprises</h1>      
      <button className = "details" onClick={() => setHidden( y=> !y)}> Detailed view </button>
      </div>
      <div className='employeeWrapWrap'>
      {employees.map(employee => 
        <div className='employeeWrap'>
          <p className='entBody'>{employee.employeeName}</p>
            {!hidden ? 
            <div>
              <p className='entBody'>{employee.firstName+" "+LastName}</p>
              <p className='entBody'>{company.role}</p>
              <p className='entBody'>{company.credentials}</p>
            </div>:null}
         
          <button className='delete' onClick={() => {handleDeleteEmps(company._id)}}>Delete</button>
         <Link to= {`/UpdateCompany/${company._id}`} ><button className='update'>Update</button></Link>
                
        <div>
        </div>
        </div>)}
    </div>
    </main>
  );
}