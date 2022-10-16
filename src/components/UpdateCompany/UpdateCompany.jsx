// import { useState, useEffect } from "react";
// const { AddEnterprise } = require("../AddEnterprise/AddEnterprise");


// import * as companyAPI from "../../utilities/company-api";


// export default function UpdateCompany(props){
// // const [comp, setCompDetails] = useState(props.company[0]._id)
// const [comp, setCompDetails] = useState(props.companies[0]._id)
// const [currDetails, setDetails] = useState([]);

// const {user, companies, id} = props

// useEffect(function (){
//     async function getACompany(){
//     const companies = await companyAPI.getOneCompany();
//     setCompDetails(companies);
//     console.log(companies)
// }
// getACompany();
// }, [])

// function update(){
//     const compDetails = comp.filter(co => co._id !== comp);
//     setDetails()
// }

// async function handleSubmit(evt) {
//     evt.preventDefault();
//     // const id = this.props.id;
//     const payload = {
//       user: user,
//       companies: comp,
     
//     }
//     const updateCompany = await companyAPI.updateCompany(payload, id)
//     console.log(updateCompany);
//   }

//   return(
//     <>
//     <h1>Update Company</h1>
//     <form onSubmit={handleSubmit}>
//     <input type = "text" name="name" value={comp.name}/>
//     <input type = "text" name="name" value={comp.}/>

//     <button type="submit" id = "sub">Update</button>  
//     </form>
//     <AddEnterprise/>


//     </form>
//     </>
//   )
// }




// {/* <form onSubmit={handleSubmit}>
// <form autoComplete="off" onSubmit={this.handleSubmit}>
// <label className='entLabels'>Name</label>
// <input type="text" name="name" className='entFields' required />
// <label className='entLabels'>Stock ID</label>  
// <input type="text" name="stockSymbol" className='entFields'  required />
// <label className='entLabels'>CEO</label>  
// <input type="text" name="ceo" className='entFields'  required />
// <label className='entLabels'>Region(s)</label>  
// <input type ="text" name="regions" className='entFields'  required />
// <label className='entLabels'>Number of offices</label>  
// <input type="text" name="officeCount" className='entFields'  required /> */}