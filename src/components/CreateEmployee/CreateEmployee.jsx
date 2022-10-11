import React, { Component, useState } from 'react';
// import * as companyAPI from '../../utilities/company-api';
// import LogOut from '../LogOut/LogOut';
// import Companies from '../CompanyList/CompanyList';
import { createEmployee } from '../../utilities/company-api';

export default class createEmployee extends Component {
  state = {
    firstname: '',
    lastname: '',
    role: '',
    dob: '',
    credentials: '',
    isSuper: '',
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
    const formData = { ...this.state };
    formData.confirm;
    // delete formData.error;
    // The promise returned by the signUp service method
    // will resolve to the user object included in the 
    // payload of the JSON Web Token (JWT)
    const employee = await createEmployee(formData);
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
    <h1 className = "createEmployee">New Employee</h1>
    <form autoComplete="off" onSubmit={this.handleSubmit}>
    <label>firstname</label>
    <input type="text" name="firstName" value={this.state.firstname} onChange={this.handleChange} required/>
    <label>lastname</label>  
    <input type="text" name="lastName" value={this.state.lastname} onChange={this.handleChange} required/>
    <button type="submit">Create</button>
    </form>
    </div>
    );
  }