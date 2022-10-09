import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }
        //if employee == super display my companies and user information
        //if employee !== super display track record and user information
    return (
        <nav>
            <Link to="/MyEnterprises" className = "allEnterprises">My Enterprises</Link>
            &nbsp; | &nbsp;
            <Link to="/AddEnterprise/new" className = "newEnterprise">Add New Enterprise</Link>
            &nbsp; | &nbsp;
            <span className = "welcome">Welcome, </span>
            <Link to= " " className = "userName">{user.name}</Link>
            &nbsp;&nbsp; <Link to={""} onClick={handleLogOut} className = "logOut">Logout</Link>
        </nav>
            
            
    )
}
