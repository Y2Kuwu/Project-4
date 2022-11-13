import { Component } from 'react';
import { redirect } from 'react-router-dom';
import { createCompany} from '../../utilities/company-api';
import { Navigate } from 'react-router-dom';
class AddEnterprise extends Component {
  constructor(props){
    super(props);

    this.state = {
    companyName:'',
    stockSymbol: '',
    ceo: '',
    regions: '',
    officeCount: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



handleChange (evt)  {
  this.setState({[evt.target.name]: evt.target.value});
};

handleSubmit (evt) {
  try {
    evt.preventDefault();
    const {companyName, stockSymbol, ceo, regions, officeCount} = this.state;
    createCompany(this.state,
    {
      companyName :companyName,
      stockSymbol : stockSymbol,
      ceo : ceo,
      regions : regions,
      officeCount : officeCount,
    })
    alert('Successfully created: ' + this.state.companyName + '!')
    //this.props.history.push('/');
    
  } catch {
    this.setState({ error: 'Company creation failed' });
  }
};
  

render(){
  return (
    <div>
    <h1 className = "Enterprise">New Enterprise</h1>
    <div className = "createEnt">
    <form autoComplete="off" onSubmit={this.handleSubmit}>
    <label className='entLabels'>Name</label>
    <input type="text" name="companyName" className='entFields' defaultValue={this.state.companyName} onChange={this.handleChange} required />
    <label className='entLabels'>Stock ID</label>  
    <input type="text" name="stockSymbol" className='entFields' defaultValue={this.state.stockSymbol} onChange={this.handleChange} required />
    <label className='entLabels'>CEO</label>  
    <input type="text" name="ceo" className='entFields' defaultValue={this.state.ceo} onChange={this.handleChange} required />
    <label className='entLabels'>Region(s)</label>  
    <input type ="text" name="regions" className='entFields' defaultValue={this.state.regions} onChange={this.handleChange} required />
    <label className='entLabels'>Number of offices</label>  
    <input type="text" name="officeCount" className='entFields' defaultValue={this.state.officeCount} onChange={this.handleChange} required />
    <button type="submit" id = "sub">Create</button>  
    </form>
    <p className='infoNote'>Additional information will be required after initial creation</p>
    </div>
    </div>
    );
  }
}

export default AddEnterprise;