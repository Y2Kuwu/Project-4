import { detailCompany } from "../../utilities/company-api";
import { useState, useEffect } from "react";
import * as companyAPI from "../../utilities/company-api";
import MyEnterprises from "../../components/MyEnterprises/MyEnterprises";
export default function EnterpirseDetails({company, handleDetails}) {
const myEnt = company.myEnt.map(comp=>
  <MyEnterprises
    myEnt={comp}
    key={comp.id}
  />
  
  );
  return( 
    <ul>
    
    <li>{company.stockSymbol}</li>
    <li>{company.ceo}</li>
    <li>{company.regions}</li>
    <li>{company.officeCount}</li>
    </ul>
  )
};
// export default function EnterpriseDetails({companies}){
//   let {id} = useParams();

//   let company = companies.find((ent) => ent._id === id);

//   if (!company) return null; //&& alert('Company details not available')

// return (

//   <div>
   
//   {details.map((company, index) => 
    
//     <ul>
      
      
      
//     </ul>
//   )}
//   </div>
  
// )}





// import { useParams } from "react-router-dom";
// import MyEnterprises from "../MyEnterprises/MyEnterprises";
// import { Component } from "react";

// // class EnterpriseDetails extends Component{
// // state = {
// //     company : props
// // };

// // handleChange = (evt) => {
// //     this.setState({
// //       [evt.target.name]: evt.target.value,
      
// //       error: ''
// //     });
// //   };




// let filterDetails = props.companies.filter((company)=>{
//     if(company.name ===id ){
//         return company
//     }
//     return null;
// });



// return(
//     <>
//         {filterDetails.map((com) => {
//             return(

//             )
//         }
//     </>
// )