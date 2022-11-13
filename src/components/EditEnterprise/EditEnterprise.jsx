


import { Component } from 'react';
import * as companyAPI from "../../utilities/company-api";
import { Link } from 'react-router-dom';
import MyEnterprises from '../MyEnterprises/MyEnterprises';
    // export default function MyEnterprise() {
  
      export default class EditEnterprise extends Component{
        constructor(props) {
          super(props);
          this.state ={
            edit: false
          };
          this.newCompanyName = '';
          this.newStockSymbol='';
          this.newCeo='';
          this.newRegions='';
          this.newOfficeCount='';
        }
    
     render(){
     const {companyName, stockSymbol, ceo, regions, officeCount, startEdit} = this.props;
return(
 
 <main>
      <div className='edit'>
      {this.state.edit ? (
      <p className="companyName">{companyName}</p>):(
      <input
      type="text"
      value={companyName}
      ref={node => {
      this.newCompanyName = node;}}
      />)}

{this.state.edit ? (
      <p className="stockSymbol">{stockSymbol}</p>):(
      <input
      type="text"
      value={stockSymbol}
      ref={node => {
      this.newStockSymbol = node;}}
      />)}

{this.state.edit ? (
      <p className="ceo">{ceo}</p>):(
      <input
      type="text"
      value={ceo}
      ref={node => {
      this.newCeo = node;}}
      />)}

{this.state.edit ? (
      <p className="regions">{regions}</p>):(
      <input
      type="text"
      value={regions}
      ref={node => {
      this.newRegions = node;}}
      />)}

{this.state.edit ? (
      <p className="officeCount">{officeCount}</p>):(
      <input
      type="text"
      value={officeCount}
      ref={node => {
      this.newOfficeCount = node;}}
      />)}
  
  <button className = "change" onClick={() => {this.setState({ edit: true, value: this.state });}}>
        Update
  </button>
  </div>
</main>

  );
}
}







// import { useState } from "react";
// import MyEnterprise from "../MyEnterprises/MyEnterprises";

// function editEnterprise(id, company){


//     const editedEnts = companies.map(()=>{
//       if (id === company.id){
//         return {...company}
      
//       }
//       return company;
//     })
//     setCompanies(editedEnterprise);

//     const [edit, setEdit] = useState(false);

//     const company = companies.map((task) => (
//         <MyEnterprise
//           id={company.id}
//           companyName={company.companyName}
//           stockStymbol={company.stockStymbol}
//           ceo={company.ceo}
//           regions={company.region}
//           officeCount={company.officeCount}
//           key={company.id}
//           editEnt={editEnt}
//         />
//       ));
//       const editingTemplate = (
//         <form className="editAndUpdate">
//           <div className="edit-form">
//             <label className="editing" htmlFor={companies.id}>
//               New name {companies.companyName}
//             </label>
//             <input id={companies.id} className="rename" type="text" />
//             <label className="editing" htmlFor={companies.id}>
//               New symbol {companies.stockSymbol}
//             </label>
//             <input id={companies.id} className="rename" type="text" />
//             <label className="editing" htmlFor={companies.id}>
//               New ceo {companies.ceo}
//             </label>
//             <input id={companies.id} className="rename" type="text" />
//             <label className="editing" htmlFor={companies.id}>
//               New region(s) {companies.regions}
//             </label>
//             <input id={companies.id} className="rename" type="text" />
//             <label className="editing" htmlFor={companies.id}>
//               New offices {companies.officeCount}
//             </label>
//             <input id={companies.id} className="rename" type="text" />
//           </div>
//         </form>

//       );
// }