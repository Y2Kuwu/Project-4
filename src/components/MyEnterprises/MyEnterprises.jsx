import { useState, useEffect } from 'react';
import * as companyAPI from "../../utilities/company-api";
import { Component } from 'react';
// import { AddEnterprise } from '../AddEnterprise/addEnterprise';
import { Link } from 'react-router-dom';

    export default function MyEnterprise() {
  
    const [companies, setCompanies] = useState([]);
    const [hidden, setHidden] = useState(true);
   
  
   useEffect(() =>{
    async function getCompanies() {
      const companies = await companyAPI.getCompany();
      setCompanies(companies);
    }
    
    getCompanies();
  }, [])

  async function handleDeleteCompanies(id){
    const deleteComp = await companyAPI.deleteCompany(id);
    window.location.reload()
  }


return(
 <main>
    
      <div className='banner'>
      <h1 className='enterprises'>Companies</h1>      
      <button className = "details" onClick={() => setHidden( y=> !y)}> Detailed view </button>
      </div>
      <div className='companyWrapWrap'>
      {companies.map(company => 
        <div className='companyWrap'>
          <p>{company.companyName}</p>
            {!hidden ? 
            <div>
              <p>{company.stockSymbol}</p>
              <p>{company.ceo}</p>
              <p>{company.regions}</p>
              <p>{company.officeCount}</p>
            </div>:null}
            <Link to={"UpdateCompany/" + company._id} className="update">Update</Link>
          <button className='delete' onClick={() => {handleDeleteCompanies(company._id)}}>Delete</button>
        <div>
        </div>
        </div>)}
    </div>
    </main>
  );
}
  

 