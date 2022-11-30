import { useState } from "react";
import Modal from "../Modal";


const SearchClaimTableRow = (searchClaims) => {

    const [openModal, setOpenModal] = useState(false);
    
    
    return (
    <tbody> 
     <tr key={searchClaims.id}>
     <td>{searchClaims.policyNumber}</td>
     <td>{searchClaims.firstName}</td>
     <td>{searchClaims.surname}</td>
     <td>{searchClaims.insuranceType} Insurance</td>
     <td><button onClick={ () => setOpenModal(true) } className="tableButton" type="button" name="registerButton">OPEN</button></td>
    </tr>
        <div>
        <Modal open={openModal} onClose={() => setOpenModal(false)}/>
        </div>
        </tbody>
        
    );
}
export default SearchClaimTableRow;