import {Component} from 'react';
import { Navigate } from 'react-router-dom';


import {signUp} from '../../utilities/users-service';


export default class SignUpForm extends Component {
   

    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
        
    }
    
    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            // alert(JSON.stringify(this.state));
            const formData = {...this.state};
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.setState(user);
            this.props.setUser(user);
        } catch {
            this.setState({
                error: 'Sign Up Failed - Try Again'
                //add error page
            });
        }
    }

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            
            error: ''
        });
    };
 //use line 63-66 to nav for first time users */
    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            


                //change navigation point to new user page where nav bar is not visible and turns off forward backward refresh

            <div>
                <div className="form-container">     
                {
                <Navigate to = "createEmployee" replace = {true} onChange={this.handleChange}/>  
                }
                    
                    <form autoComplete="off" onSubmit={(evt)=> this.handleSubmit(evt)}>
                        <label className = "loginLabels">Name</label>
                        <input type="text" name="name" className = "loginVals" value={this.state.name} onChange={this.handleChange} required/>
                        <label className = "loginLabels">Email</label>
                        <input type="email" name="email" className = "loginVals" value={this.state.email} onChange={this.handleChange}
                               required/>
                        <label className = "loginLabels">Password</label>
                        <input type="password" name="password" className = "loginVals" value={this.state.password} onChange={this.handleChange}
                               required/>
                        <label className = "loginLabels">Confirm</label>
                        <input type="password" name="confirm"className = "loginVals" value={this.state.confirm} onChange={this.handleChange}
                               required/>
                        <button type="submit" className = "login" disabled={disable}>SIGN UP</button>
                        
                    </form>
                </div>

                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
            
        );
    }

};
