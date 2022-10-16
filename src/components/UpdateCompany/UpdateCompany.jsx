// import { render } from "@testing-library/react";
// import { useState, useEffect } from "react";
// // const { AddEnterprise } = require("../AddEnterprise/AddEnterprise");
// import * as MyEnterprise from "../MyEnterprises/MyEnterprises";

// import * as companyAPI from "../../utilities/company-api";


// export default function UpdateCompany(props){



//   return(
//     <>
//     <h1>Update Company</h1>
//     <form onSubmit={handleSubmit}>
    
//     </form>


//     </form>
//     </>
//   )
// }




{/* <form onSubmit={handleSubmit}>
<form autoComplete="off" onSubmit={this.handleSubmit}>
<label className='entLabels'>Name</label>
<input type="text" name="name" className='entFields' required />
<label className='entLabels'>Stock ID</label>  
<input type="text" name="stockSymbol" className='entFields'  required />
<label className='entLabels'>CEO</label>  
<input type="text" name="ceo" className='entFields'  required />
<label className='entLabels'>Region(s)</label>  
<input type ="text" name="regions" className='entFields'  required />
<label className='entLabels'>Number of offices</label>  
<input type="text" name="officeCount" className='entFields'  required /> */}




// useEffect(function (){
//   async function getACompany(){
//   const companies = await companyAPI.getOneCompany();
//   setCompDetails(companies);
//   console.log(companies)
// }
// getACompany();
// }, [])

// function update(){
//   const compDetails = comp.filter(co => co._id !== comp);
//   setDetails()
// }

// async function handleSubmit(evt) {
//   evt.preventDefault();
//   // const id = this.props.id;
//     const payload = {
//     user: user,
//     companies: comp,
   
//   }
//   const updateCompany = await companyAPI.updateCompany(payload, id)
//   console.log(updateCompany);
// }