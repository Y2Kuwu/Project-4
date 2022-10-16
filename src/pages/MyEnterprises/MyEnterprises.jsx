import { useState, useEffect } from 'react';
import * as companyAPI from "../../utilities/company-api";


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

  async function handleDeleteCompanies(id){
    const deleteComp = await companyAPI.deleteCompany(id);
    window.location.reload()
  }
  useEffect(()=>{
  async function getOne(id){
    const companies = await companyAPI.getOneCompany(id);
    setCompanies(companies.id);
  }
  getOne();
}, [])

  async function handleUpdateCompanies(id) {
    companyAPI.updateCompany(id);
    const updateComp =  companies.filter(company => company._id === id)
    setUpCompany(updateComp)
  }

  return (
 <main>
    {/* {comp &&<UpdateCompany id={comp[0]._id}{...comp[0]}/>} */}
      <div className='banner'>
      <h1 className='enterprises'>Companies</h1>      
      <button className = "details" onClick={() => setHidden( y=> !y)}> Detailed view </button>
      </div>
      <div className='companyWrapWrap'>
      {companies.map(company => 
        <div className='companyWrap'>
          <p>{company.name}</p>
            {!hidden ? 
            <div>
              <p>{company.stockSymbol}</p>
              <p>{company.ceo}</p>
              <p>{company.regions}</p>
              <p>{company.officeCount}</p>
            </div>:null}
           <button className = "update" onClick={() => handleUpdateCompanies(company._id)}>Update</button>
          <button className='delete' onClick={() => {handleDeleteCompanies(company._id)}}>Delete</button>
        </div>)}
     
    </div>
    </main>
  );
}

