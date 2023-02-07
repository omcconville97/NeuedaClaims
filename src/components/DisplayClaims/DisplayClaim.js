import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getAllClaimsAxios, getAllClaimsForInsuranceType } from "../../data/DataFunctions";
import './Display.css';
import DisplayModal from "../DisplayModal";
import InsuranceTypeSelector from "../InsuranceTypeSelector";
import DisplayClaimsRow from "./DisplayClaimsRow";


const DisplayClaim = (props) => {

    const [claims, setClaims] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect( () => {
        if(props.searchTerm !== "") {
            setIsLoading(true);
            getAllClaimsAxios()
                .then( response => {
                    const claim = response.data.filter((claim) => {
                        return (
                            claim.policyNumber.includes(props.searchTerm) ||
                            claim.surname.toLowerCase().includes(props.searchTerm.toLowerCase())
                        );
                    });
                        setClaims(claim);
                        setIsLoading(false);
                } )
                .catch ( error => {
                    console.log("something went wrong PN", error);
                })
        }

    }, [props.searchTerm]  );

    const loadData = (insuranceType) => {
        getAllClaimsForInsuranceType(insuranceType)
            .then ( response => {
                if (response.status === 200) {
                    setIsLoading(false);
                    setClaims(response.data);
                    console.log("Returning results for InsuranceType", response.data)
                }
                else {
                    console.log("something went wrong", response.status)
                }
            })
            .catch( error => {
                console.log("something went wrong", error);
            })
    }
    
       
    const [selectedInsuranceType, setSelectedInsuranceType] = useState("");

    useEffect( ()=> {
        const insuranceType = searchParams.get("insuranceType");
        console.log("Selected Insurance Type", insuranceType)
        console.log("Claims", claims)
        if (insuranceType !== selectedInsuranceType) {
            setSelectedInsuranceType(insuranceType);
            loadData(insuranceType);
        }
     }, [searchParams, claims, selectedInsuranceType] );

    const changeInsuranceType = (insuranceType) => {
        setSearchParams({"insuranceType" : insuranceType});
    }

    /* ==== Start of Modal ==== */
    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
    };

    const hideModal = () => {
    setShow(false);
    };
    /* ==== End of Modal ==== */

    return (
    <div>
        {!isLoading && props.searchTerm === "" && <div className="container">
            <form>
                <h2 className="formTitle">Diplay Claims</h2>
    
                <p>Please select the type of claim you would like to display</p>
                <div className="claimsTypeSelector">
                <label htmlFor="claimType">Type:</label>
                    {<InsuranceTypeSelector changeInsuranceType={changeInsuranceType}  />}
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
                        {claims
                        .map( (claim, index) =>{
                            return <DisplayClaimsRow claim={claim} key={index} index={index} 
                            policyNumber={claim.policyNumber} firstName={claim.firstName} surname={claim.surname} insuranceType={claim.insuranceType}
                            hanldeClick={hanldeClick}/>
                        })
                        }
                    </tbody>
                </table>
                {show && <DisplayModal details={selectedData} handleClose={hideModal} />}
            </div>
        </div>
    )
    }
    export default DisplayClaim;