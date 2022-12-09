
import { useState } from "react";
import { getAllClaims } from "../../data/DataFunctions";
import DisplayModal from "../DisplayModal";


const OpenClaims = () => {

  const claims = getAllClaims();

  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  

  const openClaims = claims.filter (claim => claim.status !== "Approved")
  .map((openClaim, index) => (
    <tr key={index}>
      <td>{openClaim.policyNumber}</td>
      <td>{openClaim.insuranceType}</td>
      <td>{openClaim.surname}</td>
      <td>{openClaim.status}</td>
      <td><button onClick={() => hanldeClick(openClaim)}className="tableButton" type="button" name="registerButton">OPEN</button></td>
      <td><button onClick={() => hanldeClick(openClaim)}className="approveButton" type="button" name="registerButton">Approve</button></td>
    </tr>
  ));
  

  return (
    <div className="tableContainer">
      <h2 className="formTitle">Open Claims</h2>
      <h3 className="formSubTitle">See below for all currently opened claims:</h3>
      <table>
        <thead>
          <tr>
          <th>Policy Number</th>
          <th>Insurance Type</th>
          <th>Surname</th>
          <th>Status</th>
          <th>More Details</th>
          <th></th>
          </tr>
        </thead>
        <tbody>
          {openClaims}
        </tbody>
      </table>
      {show && <DisplayModal details={selectedData} handleClose={hideModal} />}
    </div>
  );
}

//   const openClaims = claims.filter (claim => claim.status !== "Approved")
//   .map(claim => OpenClaimsTableRow(claim))

export default OpenClaims;

