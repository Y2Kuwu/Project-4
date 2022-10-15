import { useState, useEffect } from "react";
import MyEnterprises from "../../pages/MyEnterprises/MyEnterprises";
import * as companyAPI from "../../utilities/company-api";

export default function UpdateCompany(props){
const [comp, setComp] = useState(props.company[0]._id)
const {user, company, id} = props

useEffect(function (){
    async function getCompanies(){
    const company = await companyAPI.getCompany();
    setComp(company);
}
getComp();
}, [])

async function handleSubmit(evt) {
    evt.preventDefault();
    // const id = this.props.id;
    const payload = {
      company: companyDetails,
      user: user
    }
    const editAppointmentForm = await appointmentsAPI.editAppointmentForm(payload, id)
    console.log(editAppointmentForm);
  }

  return(
    <>
    <h1>Update Company</h1>
    <form onSubmit={handleSubmit}>
    <form autoComplete="off" onSubmit={this.handleSubmit}>
    <label className='entLabels'>Name</label>
    <input type="text" name="name" className='entFields' onChange={handleChange} required />
    <label className='entLabels'>Stock ID</label>  
    <input type="text" name="stockSymbol" className='entFields' onChange={handleChange} required />
    <label className='entLabels'>CEO</label>  
    <input type="text" name="ceo" className='entFields' onChange={handleChange} required />
    <label className='entLabels'>Region(s)</label>  
    <input type ="text" name="regions" className='entFields' onChange={handleChange} required />
    <label className='entLabels'>Number of offices</label>  
    <input type="text" name="officeCount" className='entFields'  onChange={handleChange} required />
            <button type="submit" id = "sub">Update</button>  
    </form>



    </form>
    </>
  )
}