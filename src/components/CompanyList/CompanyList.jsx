

export default function CompanyList({companies, myCompanies, setCompanies}){
    const comps = companies.map(comp =>
    <li 
        key={comp}
        className = {comp === myCompanies ? 'mine' : ''}
        onClick={() => setCompanies(comp)}
        >
        {comp}
            </li>
        );
        return(
        <ul className="CompanyList">
        {comps}
        </ul>
        );
}


//onclick handler