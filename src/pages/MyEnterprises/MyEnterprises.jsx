import {checkToken} from "../../utilities/users-service";
import * as companyAPI from '../../utilities/company-api';
import { useEffect, useState } from "react";
import CompanyList from "../../components/CompanyList/CompanyList";
import UserLogOut from "../../components/LogOut/LogOut";



export default function MyEnterprises({user, setUser}) {
    const [companies, setCompanies] = useState([])
    async function handleCheckToken() {
        // calling checkToken from service layer
        const expDate = await checkToken();
        console.log(`expDate is ${expDate}`);
    }
useEffect(function (){
    async function getCompanies(){
        const companies = await companyAPI.getCompany()
        setCompanies(companies);
    }
    getCompanies();
}, [])

    return (
        <>
            <h1 className = "allEnterprises">My Enterprises</h1>
            <button className = "timeOut" onClick={handleCheckToken}>Check When My Login Expires</button>
        </>
    );
}

{/* <CompanyList
companies={companies}
/> */}