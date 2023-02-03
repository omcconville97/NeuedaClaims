import { FaEdit, FaStickyNote } from "react-icons/fa";
import { Link } from "react-router-dom";
const OpenClaimsRow = ({details, hanldeClick}) => {
    
    return (
        <tr>    
            <td>{details.policyNumber}</td>
            <td>{details.insuranceType}</td>
            <td>{details.firstName}</td>
            <td>{details.surname}</td>
            <td>{details.status}</td>
            <td><button onClick={() => hanldeClick(details)}className="tableButton" type="button" name="registerButton">Open</button></td>
            <td>
                <div className="sideby">
                <Link to={"/dataform/" + details.id}><button className="actionButton"><FaEdit /></button></Link>
                <Link to={"/notesform/" + details.id}><button className="actionButton"><FaStickyNote /></button></Link>
                </div>
            </td>
        </tr>
    )
}
export default OpenClaimsRow;