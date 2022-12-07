//import { text } from 'express';
//import { useState } from 'react';
import { Component } from 'react';
import { createEmployee } from '../../utilities/employee-api';

// let duty = [];
// let cred = [];
// let note = [];
let dIdx = 0;
let cIdx = 0;
let nIdx = 0;

 class CreateEmployee extends Component {

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
    //this.updateDuty = this.updateDuty.bind(this);
    //this.updateNote = this.updateNote.bind(this);
    //this.updateCred = this.updateCred.bind(this);
  }

    
    
    onChangeDuty = evt =>{
      this.setState({dv: evt.target.value})
     // duty.push({dv: evt.target.value});
    };
    onChangeCred = evt =>{
      this.setState({cv: evt.target.value})
     // cred.push({dv: evt.target.value});
    };
    onChangeNote = evt =>{
      this.setState({nv: evt.target.value})
      //note.push({dv: evt.target.value});
    };

   

    onAddDuty = () => {
      this.setState(state =>{
        const duties = state.duties.concat(state.dv);
        console.log(duties);
        return {
          duties,
          dv: '',
        };
      });
    }

    onAddCred = () => {
      this.setState(state =>{
        const credentials = state.credentials.concat(state.cv);
        console.log(credentials);
        return {
          credentials,
          cv: '',
        };
      });
    }

    onAddNote = () => {
      this.setState(state =>{
        const notes = state.notes.concat(state.nv);
        
        console.log(notes);
        return {
          notes,
          nv: '',
        };
      });
    }

 handleChange(evt){
  this.setState({[evt.target.name]: evt.target.value});
  console.log(evt.target.name)
};

updateDuty(ud){
const upd = this.refs.input;
const show = upd.value.trim();
upd.value = '';
upd.focus();
++dIdx;
var newDuty = 
{
  id: dIdx,
  name: show,
};
var storeDuty = this.props.storeDuty;
storeDuty.push(newDuty);
this.props.func(storeDuty);
}
updateCred(uc){
const upd = this.refs.input;
const show = upd.value.trim();
upd.value = '';
upd.focus();
++cIdx;
var newCred = 
{
  id: cIdx,
  name: show,
};
var storeCred = this.props.storeCred;
storeCred.push(newCred);
this.props.func(storeCred);
}
updateNote(un){
  const upd = this.refs.input;
  const show = upd.value.trim();
  upd.value = '';
  upd.focus();
  ++nIdx;
  var newNote = 
  {
    id: nIdx,
    name: show,
  };
  var storeNote = this.props.storeNote;
  storeNote.push(newNote);
  this.props.func(storeNote);
  }



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
    <input type="text" value={this.state.dv} onChange={this.onChangeDuty} className = "empFields"/>
    <button type="button" onClick={this.onAddDuty} disabled={!this.state.dv} id= "sub">Add</button>
    {/* <ul>
      {this.props.storeDuty.map((d)=>
      <li key ={d.id}>{d.show}</li>
      )}
    </ul> */}


    <label className = "empLabels">Credentials</label>  
    <input type="text" value={this.state.cv} onChange={this.onChangeCred} className = "empFields"/>
    <button type="button" onClick={this.onAddCred} disabled={!this.state.cv} id= "sub">Add</button>
    {/* <ul>
      {this.props.storeCred.map((c)=>
      <li key ={c.id}>{c.show}</li>
      )}
    </ul> */}


    <label className = "empLabels">Notes</label>  
    <input type="text" value={this.state.nv} onChange={this.onChangeNote} className = "empFields"/>
    <button type="button" onClick={this.onAddNote} disabled={!this.state.nv} id= "sub">Add</button>
    {/* <ul>
      {this.props.storeNote.map((n)=>
      <li key ={n.id}>{n.show}</li>
      )}
    </ul> */}
    
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
 export default CreateEmployee;
