import { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import * as companyAPI from "../../utilities/company-api";
import CreateCompany from '../../pages/AddEnterprise/AddEnterprise';


export default function MyEnterprises() {
    const [companies, setCompanies] = useState([]);
    const [comp, setUpCompany] = useState();
    const [hidden, setHidden] = useState(true);

  useEffect(() =>{
    async function getCompanies() {
      const companies = await companyAPI.getCompany();
      setCompanies(companies);
    }
    getCompanies();
  }, [])

  async function deleteCompanies(id){
    const deleteComp = await companyAPI.deleteCompany(id);
    window.location.reload()
  }
//   useEffect(()=>{
//   async function getOne(id){
//     const companies = await companyAPI.getOneCompany(id);
//     setCompanies(companies.id);
//   }
//   getOne();
// }, [])

  function updateCompanies(id) {
    companyAPI.updateCompany(id);
    const updateComp =  (company => company._id === id)
    setUpCompany(updateComp)
  }

  return (
   
 <main>
    {comp &&<updateCompanies id={comp[0]._id}{...comp[0]}/>}
    <div className='companyWrapWrap'>
     
      <h1 className='enterprises'>Companies</h1>
      <button className = "details" onClick={() => setHidden( y=> !y)}> Show all details </button>
      {companies.map((company, index) => 
        <div className='companyWrap'>
          <p className='compName'>{company.name}</p>
            {!hidden ? 
            <div className='detailBody'>
              <p>{company.stockSymbol}</p>
              <p>{company.ceo}</p>
              <p>{company.regions}</p>
              <p>{company.officeCount}</p>
            </div>:null}
           <button className = "update" onClick={() => updateCompanies(company._id)}>Update</button>
          <button className='delete' onClick={(handleChange) => {deleteCompanies(company._id)}}>Delete</button>
        </div>)}
       
    </div>
    </main>
  );
}
