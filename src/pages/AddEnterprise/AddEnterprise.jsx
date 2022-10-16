import './AddEnterprise.css'
import { useState } from 'react';

function AddEnterprise({addCompany}){
  const [newCompany, setCompany] = useState(
  {name:''},
  {stockSymbol:'' },
  {ceo:'' },
  {regions:'' },
  {officeCount:''}
)
const handleChange = (evt) => {
  setCompany({...newCompany, [evt.target.name]: evt.target.value});
}
const handleAddCompany = (evt) => {
  evt.preventDefault();
  addCompany(newCompany);
  setCompany(
    {name:''},
    {stockSymbol:''},
    {ceo:'' },
    {regions:'' },
    {officeCount:''})
}
  return (
    <div className = "createEnt">
    <h1 className = "Enterprise">New Enterprise</h1>
    <form autoComplete="off" onSubmit={handleAddCompany}>
    <label className='entLabels'>Name</label>
    <input type="text" name="name" className='entFields' value={newCompany.name} onChange={handleChange} required />
    <label className='entLabels'>Stock ID</label>  
    <input type="text" name="stockSymbol" className='entFields' value={newCompany.stockSymbol} onChange={handleChange} required />
    <label className='entLabels'>CEO</label>  
    <input type="text" name="ceo" className='entFields' value={newCompany.ceo} onChange={handleChange} required />
    <label className='entLabels'>Region(s)</label>  
    <input type ="text" name="regions" className='entFields' value={newCompany.regions} onChange={handleChange} required />
    <label className='entLabels'>Number of offices</label>  
    <input type="text" name="officeCount" className='entFields' value={newCompany.officeCount} onChange={handleChange} required />
    <button type="submit" id = "sub">Create</button>  
    </form>
    <p className='infoNote'>Additional information will be required after initial creation</p>
    </div>

    );
  }
  export default AddEnterprise