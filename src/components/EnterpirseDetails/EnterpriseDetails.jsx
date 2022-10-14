import { useParams } from "react-router-dom";
import AddEnterprise from '../AddEnterprise/AddEnterprise';
import MyEnterprises from "../MyEnterprises/MyEnterprises";
import { detailCompany } from "../../utilities/company-api";

export default function EnterpriseDetails(props){
  let {id} = useParams();

  let ep = eps.find((ent) => ent._id === id);

  if (!ep) return null && alert('Company details not available')

}

return (

  <>
    <title>{ep.name}</title>
    <ul>
      <li>{ep.stockSymbol}</li>
      <li>{ep.stockSymbol}</li>
      <li>{ep.ceo}</li>
      <li>{ep.regions}</li>
      <li>{ep.officeCount}</li>

    </ul>
  </>
)






// import { useParams } from "react-router-dom";
// import MyEnterprises from "../MyEnterprises/MyEnterprises";
// import { Component } from "react";

// // class EnterpriseDetails extends Component{
// // state = {
// //     company : props
// // };

// // handleChange = (evt) => {
// //     this.setState({
// //       [evt.target.name]: evt.target.value,
      
// //       error: ''
// //     });
// //   };




// let filterDetails = props.companies.filter((company)=>{
//     if(company.name ===id ){
//         return company
//     }
//     return null;
// });



// return(
//     <>
//         {filterDetails.map((com) => {
//             return(

//             )
//         }
//     </>
// )