import { Component } from 'react';
import { createEmployee } from '../../utilities/employee-api';

 class CreateEmployee extends Component {

  constructor(props){
  super(props);
  // const [employee, setEmployee] = useState({

    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      duties: '',
      dob: '',
      credentials: '',
      notes: '',
      }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    }



 handleChange(evt){
  this.setState({[evt.target.name]: evt.target.value});
  console.log(evt.target.name)
};

handleSubmit(evt){
  
   
    try {
      evt.preventDefault();
    //const {firstName, lastName, title, duties, credentials, notes} = this.state;
    createEmployee(this.state,
    {
    
      // firstName: evt.firstName.value,
      // lastName: evt.lastName.value,
      // title: evt.title.value,
      // duties: evt.duties.value,
      // credentials: evt.credentials.value,
      // notes: evt.notes.value,
      // firstName: firstName,
      // lastName: lastName,
      // title: title,
      // duties: duties,
      // credentials: credentials,
      // notes: notes,
      
     
    })
    alert('Successfully created new employee: ' + this.state.firstName + " " +this.state.lastName + '!')
    //const createEmp = await employeeAPI.createEmployee(employee);
    //setEmployee(createEmp)
   
    
    //this.props.history.push('/');
  } catch {
    // An error happened on the server
    this.setState({ error: 'Employee creation failed' });
    alert('Unsuccessful')
  }
};


// this.handleSubmi
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
    <label className = "empLabels">Notes</label>  
    <input type="text" name="notes" className = "empFields" value={this.state.notes} onChange={this.handleChange}/>
    <button type="submit" id= "sub">Create</button>   
    </form>
    <p className='infoNote'>Additional information will be required after initial creation</p>
    </div>
    </div>
    
    )};
 }

export default CreateEmployee;
