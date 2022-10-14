import './AddEnterprise.css'
import { Component } from 'react';
import { createCompany} from '../../utilities/company-api';
// import { Route } from 'react-router-dom';
// import { redirect } from 'react-router-dom';

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
    this.props.setCompany(company);
   
  } catch {
    this.setState({ error: 'Company creation failed' });
  }
};


render(){
  return (
    <div className = "createEnt">
    <h1 className = "Enterprise">New Enterprise</h1>
    <form autoComplete="off" onSubmit={this.handleSubmit}>
   
    <label className='entLabels'>Name</label>
    <input type="text" name="name" className='entFields' value={this.props.name} onChange={this.handleChange} required />
    <label className='entLabels'>Stock ID</label>  
    <input type="text" name="stockSymbol" className='entFields' value={this.state.stockSymbol} onChange={this.handleChange} required />
    <label className='entLabels'>CEO</label>  
    <input type="text" name="ceo" className='entFields' value={this.state.ceo} onChange={this.handleChange} required />
    <label className='entLabels'>Region(s)</label>  
    <input type = "text" name="regions" className='entFields' value={this.state.regions} onChange={this.handleChange} required />
    <label className='entLabels'>Number of offices</label>  
    <input type="text" name="officeCount" className='entFields' value={this.state.officeCount} onChange={this.handleChange} required />
  
            <button type="submit" id = "sub">Create</button>  
    </form>
    <p className='infoNote'>Additional information will be required after initial creation</p>
    </div>
    
    );
  }
}