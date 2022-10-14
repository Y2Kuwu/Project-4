import { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import * as companyAPI from "../../utilities/company-api";
import CreateCompany from '../AddEnterprise/AddEnterprise';

export default function MyEnterprises(props) {
    const [companies, setCompanies] = useState([]);


  useEffect(() =>{
    async function getCompanies() {
      const companies = await companyAPI.getCompany();
      setCompanies(companies);
      // console.log(companies)
    }
    getCompanies();
  }, [])

  async function deleteCompanies(id){
    const deleteComp = await companyAPI.deleteCompany(id);
    window.location.reload()
  }
  async function companyDetails(id){
    const detailComp = await companyAPI.detailCompany(id);
    //return(companies[index].values)
    //console.log(this.company._id) 
    //console.log(companies.state)
    console.log(companies.id);
   //console.log(companies.push)employees
  }
  


  return (
    <div className='companyWrapWrap'>

      <h1 className='allEnterprises'>Companies</h1>
      {companies.map((company, index) => 
        <div className='companyWrap'>
          <ul className='companyName'>{company.name} </ul>
          <ul> <button className='details' onClick={(handleChange) => {companyDetails(company._id)}}>Details</button> <button className='delete' onClick={(handleChange) => {deleteCompanies(company._id)}}>Delete</button> </ul>
        </div>)}
    </div>);
}


 // return <p>{company.name}{company.stockSymbol}<button onClick={()=> del(index)}>remove</button></p>

//  useEffect(function() {
//     async function getCompanies() {
//       const companies = await companyAPI.getCompany();
//       setCompanies(companies);
//       console.log(companies)
//     }
//     getCompanies();
//   }, [])