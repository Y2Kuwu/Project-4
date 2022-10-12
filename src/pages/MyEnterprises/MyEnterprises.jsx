import { useState, useEffect } from 'react';
import * as companyAPI from "../../utilities/company-api";

export default function MyEnterprises({ user }) {
  const [companies, setCompanies] = useState([]);

  useEffect(function() {
    async function getCompanies() {
      const companies = await companyAPI.getCompany();
      setCompanies(companies);
      console.log(companies)
    }
    getCompanies();
  }, [])


  return (
    <main>

      <h1 className='allEnterprises'>Companies</h1>
      {companies.map(function(company, index) {
        return <p>{company.name}{company.stockSymbol}<button>delete</button></p>
      })}
    </main>
  );
}