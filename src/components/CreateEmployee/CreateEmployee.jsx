import { Component } from 'react';
import { createEmployee} from '../../utilities/employee-api';


export class CreateEmployee extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   
  }



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
    <div className='createEmp'>
 

    <form autoComplete="off" onSubmit={this.handleSubmit}>
    <label className = "empLabels">First name</label>
    <input type="text" name="firstName" className = "empFields" value={this.state.firstName} onChange={this.handleChange} required />
    <label className = "empLabels">Last name</label>  
    <input type="text" name="lastName" className = "empFields" value={this.state.lastName} onChange={this.handleChange} required />
    <label className = "empLabels">Title</label>  
    <input type="text" name="title" className = "empFields" value={this.state.title} onChange={this.handleChange} required />
    <label className = "empLabels">Duties</label>  
    <input type = "array" name="duties" className = "empFields" value={this.state.duties} onChange={this.handleChange} required />
    <label className = "empLabels">DOB</label>  
    <input type="date" name="dob" className = "empFields" value={this.state.dob} onChange={this.handleChange} required />
    <label className = "empLabels">Credential list</label>  
    <input type="text" name="credentials" className = "empFields" value={this.state.credentials} onChange={this.handleChange} required />
            <button type="submit" id= "sub">Create</button>   
    </form>
    <p className='infoNote'>Additional information will be required after initial creation</p>
    </div>
   
    </div>
    
    );
  }
}