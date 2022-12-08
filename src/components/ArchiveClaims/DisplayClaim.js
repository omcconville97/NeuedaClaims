import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllClaims, getClaims } from "../../data/DataFunctions";
import './Archive.css';
import DisplayModal from "../DisplayModal";
import Search from "../Search";

const DisplayClaim = (props) => {

    const claims = getAllClaims();
    const allClaimTypes = claims.map(claim => claim.insuranceType);
    const uniqueClaimTypes = allClaimTypes.filter((insuranceType, index) => allClaimTypes.indexOf(insuranceType) === index);
    
    const [selectedInsuranceType, setSelectedInsuranceType] = useState("")

    const changeInsuranceType = (event) => {
        const insuranceType = event.target.value;
        setSelectedInsuranceType(insuranceType);

    }

    // useEffect( () => {
    //     if(props.searchTerm !== ""){
    //         getAllClaims(props.searchTerm)
    //         .then( response => {
    //             setPayments(response.data);
                
    //         } )
    //         .catch ( error => {
    //             console.log("something went wrong", error);
    //         })
    //     }
    // }, [props.searchTerm])

    const insuranceTypeSelector = <select onChange={changeInsuranceType} defaultValue={selectedInsuranceType}>
    <option value="" disabled={true}>---select---</option>
    {uniqueClaimTypes.map (claim => <option key={claim} value={claim}>{claim}</option>)}
    </select>

    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
    };

    const hideModal = () => {
    setShow(false);
    };

    const displayClaims = claims
    .filter (claim => props.searchTerm !== "" || claim.insuranceType === selectedInsuranceType)
    .map((seachClaim, index) => (
        <tr key={index}>
          <td>{seachClaim.policyNumber}</td>
          <td>{seachClaim.firstName}</td>
          <td>{seachClaim.surname}</td>
          <td>{seachClaim.insuranceType} Insurance</td>
          <td><button onClick={() => hanldeClick(seachClaim)}className="tableButton" type="button" name="registerButton">OPEN</button></td>
        </tr>
      ))


    return (
    <div>
        {/* <div className="container">
            <Search />
        </div> */}
        <div className="container">
            <form>
                <h2 className="formTitle">Diplay Claims</h2>
    
                <p>Please select the type of claim you would like to display</p>
                <div className="claimsTypeSelector">
                <label htmlfor="claimType">Claim Type:</label>
                    {insuranceTypeSelector}
                </div>
            </form>   
        </div>
            <div className="tableContainer">
                <h2 className="formTitle">Results</h2>
                <table>
                    <thead>
                        <tr>
                        <th>Policy Number</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Insurance Type</th>
                        </tr>
                    </thead>
                    {displayClaims}
                </table>
                {show && <DisplayModal details={selectedData} handleClose={hideModal} />}
            </div>
        </div>
    )
    }
    export default DisplayClaim;