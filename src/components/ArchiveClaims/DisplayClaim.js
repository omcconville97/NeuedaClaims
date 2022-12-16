import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllClaims } from "../../data/DataFunctions";
import './Archive.css';
import DisplayModal from "../DisplayModal";


const DisplayClaim = (props) => {

    const claims = getAllClaims();
    
    const allInsuranceTypes = claims.map(claim => claim.insuranceType);
    const uniqueInsuranceType = allInsuranceTypes.filter((insuranceType, index) => allInsuranceTypes.indexOf(insuranceType) === index);
    
    // const allPolicyNumbers = claims.map(claim => claim.policyNumber);
    // const uniquePolicyNumbers = allPolicyNumbers.filter((policyNumber, index) => allPolicyNumbers.indexOf(policyNumber) === index);

    useEffect( () => {
        const allPolicyNumbers = claims.map(claim => claim.policyNumber)
    }, [props.searchTerm])



    const [searchParams, setSearchParams] = useSearchParams();

    const [selectedInsuranceType, setSelectedInsuranceType] = useState("")
    
    const changeInsuranceType = (event) => {
        const insuranceType = event.target.value;
        setSelectedInsuranceType(insuranceType);
        setSearchParams({"insuranceType" : insuranceType})
    }

    const insuranceTypeSelector = <select onChange={changeInsuranceType} defaultValue={selectedInsuranceType}>
    <option value="" disabled={true}>---select---</option>
    {uniqueInsuranceType.map (claim => <option key={claim} value={claim}>{claim}</option>)}
    </select>


    /* Start of Modal */
    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
    };

    const hideModal = () => {
    setShow(false);
    };
    /* End of Modal */

    return (
    <div>
        {props.searchTerm === "" && <div className="container">
            <form>
                <h2 className="formTitle">Diplay Claims</h2>
    
                <p>Please select the type of claim you would like to display</p>
                <div className="claimsTypeSelector">
                <label htmlFor="claimType">Insurance:</label>
                    {insuranceTypeSelector}
                </div>
            </form>   
        </div> }
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
                    <tbody>
                    { claims
                        .filter (claim => props.searchTerm !== "" || claim.insuranceType === selectedInsuranceType)
                        .map((seachClaim, index) => (
                            <tr key={index}>
                            <td>{seachClaim.policyNumber}</td>
                            <td>{seachClaim.firstName}</td>
                            <td>{seachClaim.surname}</td>
                            <td>{seachClaim.insuranceType} Insurance</td>
                            <td><button onClick={() => hanldeClick(seachClaim)}className="tableButton" type="button" name="registerButton">OPEN</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {show && <DisplayModal details={selectedData} handleClose={hideModal} />}
            </div>
        </div>
    )
    }
    export default DisplayClaim;