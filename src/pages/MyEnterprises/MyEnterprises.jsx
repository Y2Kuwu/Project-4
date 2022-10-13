import { useState, useEffect } from 'react';
import * as companyAPI from "../../utilities/company-api";


export default function MyEnterprises({ user }) {
const [companies, setCompanies] = useState([]);

    

  useEffect(() =>{
    async function getCompanies() {
      const companies = await companyAPI.getCompany();
      setCompanies(companies);
      console.log(companies)
    }
    getCompanies();
  }, [])

  async function deleteCompanies(id){
    const deleteComp = await companyAPI.deleteCompany(id);
    window.location.reload();
  }


  return (
    <>

      <h1 className='allEnterprises'>Companies</h1>
      {companies.map((company, index) => 
        <div>
          <ul>{company.name}{company.stockSymbol}<button className='destroy' onClick={(handleChange) => {deleteCompanies(company._id)}}>Delete</button></ul>
        </div>)}
    </>);
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