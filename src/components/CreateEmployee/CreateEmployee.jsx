import { useState } from 'react';
import { Component } from 'react';
import { createEmployee } from '../../utilities/employee-api';



 export default class CreateEmployee extends Component {

  constructor(props){
  super(props);
   


    this.state = {
      firstName: '',
      lastName: '',
      title: '',
      dob: '',
      
      duties: [],
      dv: '',
      credentials: [],
      cv: '',
      notes: [],
      nv: '',
      }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChangeDuty = evt =>{
      this.setState({dv: evt.target.value})
    };
    onChangeCred = evt =>{
      this.setState({cv: evt.target.value})
    };
    onChangeNote = evt =>{
      this.setState({nv: evt.target.value})
    };


    onAddDuty = () => {
      this.setState(state =>{
        const duties = state.duties.concat(state.value);
        console.log();
        return {
          duties,
          dv: '',
        };
      });
    }

    onAddCred = () => {
      this.setState(s =>{
        const credentials = s.credentials.push(s.value);
        
        return {
          credentials,
          cv: '',
          
        }
        
      })
    }

    onAddNote = () => {
      this.setState(s =>{
        const notes = s.notes.push(s.value);
        return {
          notes,
          nv: '',
        }
      })
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
    <label className = "empLabels">DOB</label>  
    <input type="date" name="dob" className = "empFields" value={this.state.dob} onChange={this.handleChange} required />
    
    <label className = "empLabels">Duties</label>  
    <input type="text" value={this.state.dv} onChange={this.onChangeDuty}/>
    <button type="button" onClick={this.onAddDuty} disabled={!this.state.dv}>Add</button>
   
    
    {/* <input type = "array" name="duties" className = "empFields" value={this.state.duties} onChange={this.handleChange} required /> */}
    {/* <label className = "empLabels">Credential list</label>  
    <input type="array" name="credentials" className = "empFields" value={this.state.credentials} onChange={this.handleChange} required />
    <label className = "empLabels">Notes</label>  
    <input type="array" name="notes" className = "empFields" value={this.state.notes} onChange={this.handleChange}/> */}
    <button type="submit" id= "sub">Create</button>   
    </form>
    <p className='infoNote'>Additional information will be required after initial creation</p>
    </div>
    </div>
    
    
     
   

    )};
 }

