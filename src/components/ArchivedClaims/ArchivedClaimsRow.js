const ArchivedClaimsRow = ({details, hanldeClick}) => {
    
    return (
        <tr>
            <td>{details.policyNumber}</td>
            <td>{details.title}</td>
            <td>{details.firstName}</td>
            <td>{details.surname}</td>
            <td>{details.status}</td>
            <td>{details.taskNote}</td>
            <td><button onClick={() => hanldeClick(details)}className="tableButton" type="button" name="registerButton">Open</button></td>
        </tr>
    )
}
export default ArchivedClaimsRow;