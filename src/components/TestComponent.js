import React, { useState } from "react";
import { getAllClaims } from "../data/DataFunctions";
import DisplayModal from "./DisplayModal";

const TestComponent = (props) => {
    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});
  
    const hanldeClick = (selectedRec) => {
      setSelectedData(selectedRec);
      setShow(true);
    };
  
    const hideModal = () => {
      setShow(false);
    };

  const claim = getAllClaims();
  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  };

  const filtered = !search
    ? claim
    : claim.filter((claim) =>
        claim.policyNumber.toLowerCase().includes(search.toLowerCase()) ||
        claim.firstName.toLowerCase().includes(search.toLowerCase()) ||
        claim.surname.toLowerCase().includes(search.toLowerCase())
      );

  const searchClaim = filtered.map((claim, index) => (      
    <tr key={index}>
    <td>{claim.policyNumber}</td>
    <td>{claim.firstName}</td>
    <td>{claim.surname}</td>
    <td>{claim.insuranceType} Insurance</td>
    <td><button onClick={() => hanldeClick(claim)}className="tableButton" type="button" name="registerButton">OPEN</button></td>
    </tr>
  
));

  return (
    <>
      <div className="container">
      <div className="searchFormat">
      <h2 className="formTitle">List of Claims</h2>
      <p>Search for a specific claim</p>
      <p>Enter details below:{" "}</p>
      <input type="text" value={search} onChange={handleSearchChange} />
      </div>
      
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
      <tbody>
      {searchClaim}
      </tbody>
      </table>
            {show && <DisplayModal details={selectedData} handleClose={hideModal} />}
            
        
      </div>
    </>
  );
};

export default TestComponent;