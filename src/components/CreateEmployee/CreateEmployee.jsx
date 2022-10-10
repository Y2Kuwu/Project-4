import {Component, useState} from 'react';
import employee from '../../../models/employee';
import {EmployeeBase} from '../../utilities/users-service';


export default class CreateEmployee extends Component {
    state = {
        name: '',
        role: '',
        age: '',
        credentials: '',
    }

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const employee = await signUpEmployee(formData);
            this.props.setEmployee(employee);
        } catch {
            this.setState({
                error: 'Error creating employee data'
            });
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    render() {
        return (
            <>
            <div className='createEmployee'>
            <form autoComplete='off' onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required/>
                <label>Role</label>
                <input type="text" name="role" value={this.state.role} onChange={this.handleChange} required/>
                <label>Age</label>
                <input type="text" name="age" value={this.state.age} onChange={this.handleChange} required/>
                <label>Credentials</label>
                <select name="creds" value={this.state.credentials} onChange={this.handleChange} required/>
                <option value="CEO"></option>
                <option value="Employee"></option>
                
            </form>
            </div>
            </>
        )
        


// export default function CreateEmployee({setEmployee}){
// const [employee, setEmployee] = useState({
//       name: '',
//       role: '',
//       age: '',
//       salary: '',
//       credentials: '',
//     });

//     function handleChange(ev) {
//         setEmployee({...employee, [evt.target.name]: evt.target.value});

//     }

//     async function handleSubmit(ev){
//         ev.preventDefault();
//     }
//     try{
//         const 
//     }catch{

//     }
// }
   