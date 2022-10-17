import { Component } from "react";
import * as companyAPI from "../../utilities/company-api";
const axios = require('axios').default;

class UpdateCompany extends Component {
    constructor(props){
    super(props);
    
    this.state = {
        companyName: '',
        stockSymbol: '',
        ceo: '',
        regions: '',
        officeCount: '',
        }
    }
    componentDidMount = () => {
    this.getOneCompanyId();
    }

getOneCompanyId() {
 axios.get('http://localhost:3000/MyEnterprises/UpdateCompany/' + this.props.match.params.id)
 .then((response) => {
 this.setState({
 companyName: response.data.companyName,
 stockSymbol: response.data.stockSymbol,
 ceo: response.data.ceo,
 regions: response.data.regions,
 officeCount: response.data.officeCount
 });
 })
 .catch((error) => {
 console.log(error);
 })
 }
 
 handleChange = (event) => {
 this.setState({ [event.target.name]: event.target.value });
 }
 
 // To update the record on submit
 handleSubmit = (event) => {
 event.preventDefault();
 const { companyName, stockSymbol, ceo, regions, officeCount } = this.state;
 axios.post('http://localhost:300/MyEnterprises/UpdateCompany/' + this.props.match.params.id, {
 companyName: companyName,
 stockSymbol: stockSymbol,
 ceo: ceo,
 regions: regions,
 officeCount: officeCount
 })
 .then((response) => {
 console.log(response);
 this.props.history.push('/');
 })
 .catch((error) => {
 console.log(error);
 });
 
 }
 
 render() {
 return (
<div>
    <h1 className = "Enterprise">Update Enterprise</h1>
    <div className = "createEnt">
    <form autoComplete="off" onSubmit={this.handleSubmit}>
    <label className='entLabels'>Name</label>
    <input type="text" name="name" className='entFields' value={this.state.companyName} onChange={this.handleChange} required />
    <label className='entLabels'>Stock ID</label>  
    <input type="text" name="stockSymbol" className='entFields' value={this.state.stockSymbol} onChange={this.handleChange} required />
    <label className='entLabels'>CEO</label>  
    <input type="text" name="ceo" className='entFields' value={this.state.ceo} onChange={this.handleChange} required />
    <label className='entLabels'>Region(s)</label>  
    <input type ="text" name="regions" className='entFields' value={this.state.regions} onChange={this.handleChange} required />
    <label className='entLabels'>Number of offices</label>  
    <input type="text" name="officeCount" className='entFields' value={this.state.officeCount} onChange={this.handleChange} required />
    <button type="submit" id = "sub">Create</button>  
    </form>
    <p className='infoNote'>Additional information will be required after initial creation</p>
    </div>
    </div>
 )}
}
 
 export default UpdateCompany
