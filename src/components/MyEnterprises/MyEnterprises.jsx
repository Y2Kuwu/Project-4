import { useState, useEffect } from 'react';
import * as companyAPI from "../../utilities/company-api";
import { Link } from 'react-router-dom';

    export default function MyEnterprises() {
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
      <button className = "details" onClick={() => setHidden( y=> !y)}> Details </button>
      </div>
      <div className='companyWrapWrap'>
      {companies.map(company => 
        <div className='companyWrap'>
          <p className='entBody'>{company.companyName}</p>
            {!hidden ? 
            <div className='ent'>
              <td  className='entBody'>Stock Symbol:</td>
              <td className='entBody'>{company.stockSymbol}</td>
              <td  className='entBody'>CEO:</td>
              <td className='entBody'>{company.ceo}</td>
              <td  className='entBody'>Regions:</td>
              <td className='entBody'>{company.regions}</td>
              <td  className='entBody'>Number of Offices:</td>
              <td className='entBody'>{company.officeCount}</td>
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