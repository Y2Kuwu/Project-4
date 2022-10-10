

export default function CompanyList({companies, myCompanies, compDetails}){
    const comps = companies.map(comp =>
    <li 
        key={comp}
        className = {comp === myCompanies ? 'mine' : ''}
        onClick={() => compDetails(comp)}
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
