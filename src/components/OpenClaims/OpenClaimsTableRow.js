import { useState } from "react";


const OpenClaimsTableRow = (openClaims) => {

    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});
  
    const hanldeClick = (selectedRec) => {
      setSelectedData(selectedRec);
      setShow(true);
    };
  
    const hideModal = () => {
      setShow(false);
    };
    
    return (
    
        <tr key={openClaims.id}>
        <td>{openClaims.policyNumber}</td>
        <td>{openClaims.insuranceType} Insurance</td>
        <td>{openClaims.surname}</td>
        <td>{openClaims.status}</td>
        <td><button onClick={() => hanldeClick(openClaims)}className="tableButton" type="button" name="registerButton">OPEN</button></td>
        </tr>
        
    
        
    );

    

};


export default OpenClaimsTableRow;