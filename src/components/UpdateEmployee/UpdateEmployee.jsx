import { useState } from 'react';
import { useParams } from "react-router-dom";

import * as employeeAPI from '../../utilities/employee-api';

export default function UpdateEmployee({employees}) {
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    duties: "",
    dob: "",
    credentials: "",
    title: "",
    notes: "",
  });

  const params = useParams();
  console.log('id',params.id); 

  // const companyDetails = company.filter(comp => comp._id === params.id)
  // console.log('company', companyDetails);

  const [error, setError] = useState('');

  function handleChange(evt) {
    setEmployee({...employee, [evt.target.name]: evt.target.value});
    setError('');
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try{
      const employeeDetail = await employeeAPI.updateEmployee(params.id, employee);
      setEmployee(employeeDetail);
      alert('success');
      // window.location.reload();
      //nav
    } catch {
      setError('Unsuccessful')
    }
  }


 return (
<div>
    <h1 className = "Enterprise">Update employee information</h1>
    <div className = "createEnt">
    <form autoComplete="off"  onSubmit={handleSubmit}>
    <label className='entLabels'>First Name:</label>
    <input type="text" name="firstName" className='entFields' value={employee.firstName} onChange={handleChange}  />
    <label className='entLabels'>Last Name:</label>  
    <input type="text" name="lastName" className='entFields' value={employee.lastName} onChange={handleChange}  />
    <label className='entLabels'>Duties:</label>  
    <input type="text" name="duties" className='entFields' value={employee.duties} onChange={handleChange}  />
    <label className='entLabels'>Date of Birth</label>  
    <input type ="text" name="dob" className='entFields' value={employee.dob} onChange={handleChange}  />
    <label className='entLabels'>Credentials</label>  
    <input type="number" name="credentials" className='entFields' value={employee.credentials} onChange={handleChange}  />
    <label className='entLabels'>Title</label>  
    <input type="number" name="title" className='entFields' value={employee.title} onChange={handleChange}  />
    <label className='entLabels'>Notes</label>  
    <input type="number" name="notes" className='entFields' value={employee.notes} onChange={handleChange} />
   
    <button type="submit" id = "sub">update</button>  
    </form>
    </div>

    </div>
 )}