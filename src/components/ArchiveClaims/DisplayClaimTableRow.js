import { useState } from "react";
import DisplayModal from "../DisplayModal";


const DisplayClaimTableRow = (displayClaims) => {

    const [openModal, setOpenModal] = useState(false);
    
    return (
    <tbody> 
        <tr key={displayClaims.id}>
        <td>{displayClaims.policyNumber}</td>
        <td>{displayClaims.firstName}</td>
        <td>{displayClaims.surname}</td>
        <td>{displayClaims.insuranceType} Insurance</td>
        <td><button onClick={ () => setOpenModal(true) } className="tableButton" type="button" name="registerButton">OPEN</button></td>
        </tr>
            <div>
            <DisplayModal open={openModal} onClose={() => setOpenModal(false)}/>
            </div>
    </tbody>
        
    );
}
export default DisplayClaimTableRow;