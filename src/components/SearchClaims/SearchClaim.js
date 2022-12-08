import { useState } from "react";
import { getAllClaims } from "../../data/DataFunctions";
import DisplayModal from "../DisplayModal";
import Search from "../Search";

const SearchClaim = () => {

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

  const searchClaims =  claims.map((seachClaim, index) => (
    <tr key={index}>
      <td>{seachClaim.policyNumber}</td>
      <td>{seachClaim.firstName}</td>
      <td>{seachClaim.surname}</td>
      <td>{seachClaim.insuranceType} Insurance</td>
      <td><button onClick={() => hanldeClick(seachClaim)}className="tableButton" type="button" name="registerButton">OPEN</button></td>
    </tr>
  ));

return (
<div>
    <div className="container">
            <Search />
        </div>

        <div className="tableContainer">
            <h2 className="formTitle">Results</h2>
            <table>
                <thead>
                <tr>
                  <th>Policy Number</th>
                  <th>Forename</th>
                  <th>Surname</th>
                  <th>Insurance Type</th>
                  
                </tr>
                </thead>
                    {searchClaims}
              </table>
              {show && <DisplayModal details={selectedData} handleClose={hideModal} />}
        </div>
    </div>

)
}
export default SearchClaim;