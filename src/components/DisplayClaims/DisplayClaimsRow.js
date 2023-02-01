const DisplayClaimsRow = ({claim, hanldeClick}) => {
    
    return (
        <tr>
            <td>{claim.policyNumber}</td>
            <td>{claim.firstName}</td>
            <td>{claim.surname}</td>
            <td>{claim.insuranceType} Insurance</td>
            <td><button onClick={() => hanldeClick(claim)}className="tableButton" type="button" name="registerButton">Open</button></td>
        </tr>
    )
}
export default DisplayClaimsRow;