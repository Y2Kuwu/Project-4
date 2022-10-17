// import './AddEnterprise.css'
// import { Component } from 'react';
// import { render } from 'react-dom';
// // import App from '../../pages/App/App';
// import Add from '../MyEnterprises/MyEnterprises';
// import MyEnterprise from '../MyEnterprises/MyEnterprises';

// export default class AddEnterprise extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       details: [{
//         name: '',
//         stockSymbol: '',
//         ceo: '',
//         regions: '',
//         officeCount: '',
//       }]
//     };
//   }

//   render() {
//     return (
//       <div>
//         {this.state.detail.map(detail => <Add key={detail.all()} detail={detail} data={this.props.data.location}/>)}
//       </div>
//     );
//   }
// }
// render(<MyEnterprise location={{}}/>, document.getElementById('root'));

// companyName: this.props.detail.companyName,
//     stockSymbol: this.props.detail.stockSymbol,
//     ceo: this.props.detail.ceo,
//     regions: this.props.detail.regions,
//     officeCount: this.props.detail.officeCount,

import { Component } from 'react';
import { createCompany} from '../../utilities/company-api';
// import {MyEnterprise} from '/components/MyEnterprises/MyEnterprises';

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
    // const j = JSON.stringify(body);
    // console.log(j)
    // createCompany(body);
    alert('Successfully created: ' + this.state.name + '!')
    // this.props.setCompany(company);
    this.props.history.push('/');
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
    <input type="text" name="name" className='entFields' defaultValue={this.state.companyName} onChange={this.handleChange} required />
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
