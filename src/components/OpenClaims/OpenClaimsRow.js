import { FaEdit, FaStickyNote } from "react-icons/fa";
const OpenClaimsRow = ({details, index, onEdit, hanldeClick, onEditNotes}) => {
    
    return (
        <tr>
            <td>{details.policyNumber}</td>
            <td>{details.title}</td>
            <td>{details.firstName}</td>
            <td>{details.surname}</td>
            <td>{details.status}</td>
            <td><button onClick={() => hanldeClick(details)}className="tableButton" type="button" name="registerButton">Open</button></td>
            <td>
                <div className="sideby">
                <button className="actionButton" onClick={() => {
                    onEdit(index)
                }}><FaEdit /></button>
                <button className="actionButton" onClick={() => {
                    onEditNotes(index)
                }}><FaStickyNote /></button>
                </div>
            </td>
        </tr>
    )
}
export default OpenClaimsRow;