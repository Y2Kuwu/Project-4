import { useState, useEffect } from 'react';
import * as companyAPI from "../../utilities/company-api";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import EditEnterprise from '../EditEnterprise/EditEnterprise'
import UpdateCompany from '../UpdateEnterprise/UpdateEnterprise';

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
      <h1 className='enterprises'>My Enterprises</h1>      
      <button className = "details" onClick={() => setHidden( y=> !y)}> Detailed view </button>
      </div>
      <div className='companyWrapWrap'>
      {companies.map(company => 
        <div className='companyWrap'>
          <p className='entBody'>{company.companyName}</p>
            {!hidden ? 
            <div>
              <p className='entBody'>{company.stockSymbol}</p>
              <p className='entBody'>{company.ceo}</p>
              <p className='entBody'>{company.regions}</p>
              <p className='entBody'>{company.officeCount}</p>
            </div>:null}
         
          <button className='delete' onClick={() => {handleDeleteCompanies(company._id)}}>Delete</button>
         <Link to= {`/UpdateCompany/${company._id}`} ><button className='update'>Update</button></Link>

        <div>
        </div>
        </div>)}
    </div>
    </main>
  );
}