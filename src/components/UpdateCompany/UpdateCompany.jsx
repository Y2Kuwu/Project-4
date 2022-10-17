import { useState } from 'react';
import { useParams } from "react-router-dom";

import * as companyAPI from '../../utilities/company-api';

export default function UpdateCompany({companies}) {
  const [company, setCompany] = useState({
    companyName: "",
    stockSymbol: "",
    ceo: "",
    regions: "",
    officeCount: "",
  });

  const params = useParams();
  console.log('id',params.id); 

  // const companyDetails = company.filter(comp => comp._id === params.id)
  // console.log('company', companyDetails);

  const [error, setError] = useState('');

  function handleChange(evt) {
    setCompany({...company, [evt.target.name]: evt.target.value});
    setError('');
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try{
      const compDetail = await companyAPI.updateCompany(params.id, company);
      setCompany(compDetail);
      alert('success');
      // window.location.reload();
      //nav
    } catch {
      setError('Unsuccessful')
    }
  }


 return (
<div>
    <h1 className = "Enterprise">Update Enterprise</h1>
    <div className = "createEnt">
    <form autoComplete="off"  onSubmit={handleSubmit}>
    <label className='entLabels'>Name</label>
    <input type="text" name="companyName" className='entFields' value={company.companyName} onChange={handleChange} required />
    <label className='entLabels'>Stock ID</label>  
    <input type="text" name="stockSymbol" className='entFields' value={company.stockSymbol} onChange={handleChange} required />
    <label className='entLabels'>CEO</label>  
    <input type="text" name="ceo" className='entFields' value={company.ceo} onChange={handleChange} required />
    <label className='entLabels'>Region(s)</label>  
    <input type ="text" name="regions" className='entFields' value={company.regions} onChange={handleChange} required />
    <label className='entLabels'>Number of offices</label>  
    <input type="number" name="officeCount" className='entFields' value={company.officeCount} onChange={handleChange} required />
    <button type="submit" id = "sub">update</button>  
    </form>
    <p className='infoNote'>Additional information will be required after initial creation</p>
    </div>

    </div>
 )}

 



//  import { Component } from "react";
// import { getOneCompany } from "../../utilities/company-api";
// const axios = require('axios').default;


// class UpdateCompany extends Component {
//     constructor(props){
//     super(props);
    
//     this.state = {
//         companyName: '',
//         stockSymbol: '',
//         ceo: '',
//         regions: '',
//         officeCount: '',
//         }
//     }
//     componentDidMount = () => {
//     getOneCompany();
//     }

// getOneCompany() {
//  axios.get('http://localhost:3000/UpdateCompany' + this.props.match.params.id)
//  .then((response) => {
//  this.setState({
//  companyName: response.data.companyName,
//  stockSymbol: response.data.stockSymbol,
//  ceo: response.data.ceo,
//  regions: response.data.regions,
//  officeCount: response.data.officeCount
//  });
//  })
//  .catch((error) => {
//  console.log(error);
//  })
//  }
 
//  handleChange = (event) => {
//  this.setState({ [event.target.name]: event.target.value });
//  }
 
//  // To update the record on submit
//  handleSubmit = (event) => {
//  event.preventDefault();
//  const { companyName, stockSymbol, ceo, regions, officeCount } = this.state;
//  axios.put('http://localhost:3000/UpdateCompany' + this.props.match.params.id, {
//  companyName: companyName,
//  stockSymbol: stockSymbol,
//  ceo: ceo,
//  regions: regions,
//  officeCount: officeCount
//  })
//  .then((response) => {
//  console.log(response);
//  this.props.history.push('/');
//  })
//  .catch((error) => {
//  console.log(error);
//  });
 
//  }
 
//  render() {