import { useState, useEffect } from 'react';
import * as companyAPI from "../../utilities/company-api";

export default function MyEnterprises() {
    const [companies, setCompanies] = useState([]);
    const [hidden, setHidden] = useState(true);

    const [name, setName] = useState('');
    const [stockSymbol, setStock] = useState('');
    const [ceo, setCEO] = useState('');
    const [regions,setRegion]=useState('')
    const [officeCount,setOffices]=useState('')

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

  async function handleUpdateCompanies(id) {

    const updateComp = await companyAPI.updateCompany(id);
    // const updateComp =  companies.filter(company => company._id === id)
  }

  return (
 <main>
    
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
          
          <button className='delete' onClick={() => {handleDeleteCompanies(company._id)}}>Delete</button>
          <div>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} /> <br /><br />
        <input type="text" value={stockSymbol} onChange={(e)=>{setStock(e.target.value)}} /> <br /><br />
        <input type="text" value={ceo}  onChange={(e)=>{setCEO(e.target.value)}} /> <br /><br />
        <input type="text" value={regions}  onChange={(e)=>{setRegion(e.target.value)}} /> <br /><br />
        <input type="text" value={officeCount}  onChange={(e)=>{setOffices(e.target.value)}} /> <br /><br />
        <button onClick={handleUpdateCompanies} >Update company</button>  
      </div>

        
        </div>)}
     
    </div>
    </main>
  );
}
