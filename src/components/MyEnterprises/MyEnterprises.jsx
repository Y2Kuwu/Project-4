import { useState, useEffect } from 'react';
import { redirect } from 'react-router-dom';
import * as companyAPI from "../../utilities/company-api";
import CreateCompany from '../AddEnterprise/AddEnterprise';
import EnterpriseDetails from '../../pages/EnterpirseDetails/EnterpriseDetails';
import LoginForm from '../../components/LoginForm/LoginForm';
import { Link } from 'react-router-dom';

export default function MyEnterprises({comp,handleDetails}) {
    const [companies, setCompanies] = useState([]);
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
  // async function companyDetails(id){
  //   const detailComp = await companyAPI.detailCompany(id);

  //   // console.log(companies.id);
  // }


  // const detailClick = () => companyDetails(true);
  return (
 

    <div className='companyWrapWrap'>
      <h1 className='enterprises'>Companies</h1>
      {companies.map((company, index) => 
        <div className='companyWrap'>
          <p>{company.name}</p>
          
            
          
            
           
            {!hidden ? 
            <p>
              <p>{company.stockSymbol}</p>
              <p>{company.ceo}</p>
              <p>{company.ceoName}</p>
              <p>{company.regions}</p>
              <p>{company.officeCount}</p>
            </p>
            :null}
            <button onClick={() => setHidden( y=> !y)}>
              Details
            </button>
        
              
                 
          
          <p> <button className='delete' onClick={(handleChange) => {deleteCompanies(company._id)}}>Delete</button> </p>
         
                
        </div>)}
    </div>
    );
}


{/* <button className='details' onClick={(handleChange) => {companyDetails(company._id)}}>Details</button>  */}


{/* <div>
    <button className='details' onClick={detailClick}>Details</button> 
    {setDetails ? <res/> :null}
    </div>
    )
    }
const res = () => (
<div id = "details">
  
</div>
)
ReactDOM.render(<detailClick />, document.querySelector("#container")) */}