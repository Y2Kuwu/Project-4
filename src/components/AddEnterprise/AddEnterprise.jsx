import { Component, useState } from 'react';
// import * as companyAPI from '../../utilities/company-api';
// import LogOut from '../LogOut/LogOut';
// import Companies from '../CompanyList/CompanyList';
import { createCompany } from '../../utilities/company-api';

export default class CreateCompany extends Component {
  state = {
    name: '',
    stockSymbol: ''
  };



// export default function AddEnterprise({user, setUser}) {
//   const [myCompanies, setCompanies] = useState([]);


//   useEffect(function () {
//     async function getCompanies() {
//       const companies = await companyAPI.getAll();
//       categoriesRef.current = items.reduce((cats, item) => {
//         const cat = item.category.name;
//         return cats.includes(cat) ? cats : [...cats, cat];
//       }, []);
//       setMenuItems(items);
//       setCompanies(categoriesRef.current[0]);
//     }
//     getCompanies();



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
    // formData.confirm;
    // delete formData.error;
    // The promise returned by the signUp service method
    // will resolve to the user object included in the 
    // payload of the JSON Web Token (JWT)
    const company = await createCompany(formData);
    // Baby step 
    this.props.setCompany(company);
  } catch {
    // An error happened on the server
    this.setState({ error: 'Company creation failed' });
  }
};



render(){
  return (
    <div>
    <h1 className = "newEnterprise">New Enterprise</h1>
    <form autoComplete="off" onSubmit={this.handleSubmit}>
    <label>Name</label>
    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
    <label>Stock ID</label>  
    <input type="text" name="stock" value={this.state.stock} onChange={this.handleChange} required />
            <button type="submit">Create</button>
    <p>Additional information will be required after initial creation</p>

    </form>
    </div>
    );
  }
}