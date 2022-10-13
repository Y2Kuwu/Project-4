import { Component } from 'react';
import { createEmployee} from '../../utilities/company-api';

export default class CreateEmployee extends Component {
  state = {
    firstName: '',
    lastName: '',
    title: '',
    duties: '',
    dob: '',
    credentials: '',
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
   
    const employeeForm = { ...this.state };
    const employee = await createEmployee(employeeForm);
    // Baby step 
    this.props.setEmployee(employee);
   
  } catch {
    // An error happened on the server
    this.setState({ error: 'Employee creation failed' });
  }
};


render(){
  return (
    <div>
    <h1 className = "newEmployee">Onboard Employee</h1>
    <form autoComplete="off" onSubmit={this.handleSubmit}>
    <label>First name</label>
    <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
    <label>Last name</label>  
    <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
    <label>Title</label>  
    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
    <label>Duties</label>  
    <input type = "text" name="duties" value={this.state.duties} onChange={this.handleChange} required />
    <label>DOB</label>  
    <input type="text" name="dob" value={this.state.dob} onChange={this.handleChange} required />
    <label>Credential list</label>  
    <input type="text" name="credentials" value={this.state.credentials} onChange={this.handleChange} required />
            <button type="submit">Create</button>   
    </form>
    </div>
    
    );
  }
}