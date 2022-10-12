import './AddEnterprises.css'
import { Component, useState } from 'react';
// import * as companyAPI from '../../utilities/company-api';
// import LogOut from '../LogOut/LogOut';
// import Companies from '../CompanyList/CompanyList';
import { createCompany } from '../../utilities/company-api';

export default class CreateCompany extends Component {
  state = {
  
    name: '',
    stockSymbol: '',
    ceo: '',
    regions: '',
    officeCount: '',
  };


handleChange = (evt) => {
  this.setState({
    [evt.target.name]: evt.target.value,
    error: ''
  });
};

handleSubmit = async (evt) => {
  evt.preventDefault();
  try {
   
    const compForm = { ...this.state };
    
    const company = await createCompany(compForm);
    // Baby step 
    this.props.setCompany(company);
  } catch {
    // An error happened on the server
    this.setState({ error: 'Company creation failed' });
  }
};



render(){
  return (
    <div>
    <h1 className = "newEnterprise">New Enterprise</h1>
    <form autoComplete="off" onSubmit={this.handleSubmit}>
    <label>Name</label>
    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
    <label>Stock ID</label>  
    <input type="text" name="stockSymbol" value={this.state.stockSymbol} onChange={this.handleChange} required />
    <label>CEO</label>  
    <input type="text" name="ceo" value={this.state.ceo} onChange={this.handleChange} required />
    <label>Region(s)</label>  
    <select>
    <input type = "text" name="regions" value={this.state.regions} onChange={this.handleChange} required />
    <option value = "here">un</option>
    </select>
    <label>Number of offices</label>  
    <input type="text" name="officeCount" value={this.state.officeCount} onChange={this.handleChange} required />
            <button type="submit">Create</button>
    
    </form>
    <p className='infoNote'>Additional information will be required after initial creation</p>
    </div>
    
    );
  }
}







// formData.confirm;
    // delete formData.error;
    // The promise returned by the signUp service method
    // will resolve to the user object included in the 
    // payload of the JSON Web Token (JWT)





    