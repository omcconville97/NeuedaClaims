

const OpenClaimsTableRow = (openClaims) => {

    
    
    return (
    
        <tr key={openClaims.id}>
        <td>{openClaims.policyNumber}</td>
        <td>{openClaims.insuranceType} Insurance</td>
        <td>{openClaims.surname}</td>
        <td>{openClaims.status}</td>
        <td><button className="tableButton" type="button" name="registerButton">OPEN</button></td>
        </tr>
        
    
        
    );

    

};


export default OpenClaimsTableRow;