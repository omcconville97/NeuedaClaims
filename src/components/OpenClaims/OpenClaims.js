
import { useEffect, useState } from "react";
import { getAllClaimsAxios } from "../../data/DataFunctions";
import DisplayModal from "../DisplayModal";
import OpenClaimsRow from "./OpenClaimsRow";


const OpenClaims = () => {

  const [tableData, setTableData] = useState([])
  const [loading, setLoading] = useState(true);

  const loadDataAxios = () => {
    getAllClaimsAxios()
        .then(response => {
            const filtered = response.data.filter(claim => claim.status !== "Accepted - Paid" && claim.status !== "Rejected")
            setTableData(filtered);
            setLoading(false);
        })
        .catch(error => {
            console.log("something went wrong", error);
        });
    };

    useEffect(() => {
        loadDataAxios()
    }, []);

    useEffect(() => {
        loadDataAxios()
    }, [tableData.id]);


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
        <>
        <div className="tableContainer">
        <h2 className="formTitle">Claims to be Approved</h2>
        {loading && <p style={{textAlign:"center"}}>The data is loading please wait...</p>}
        <h3 className="formSubTitle">See below for all currently opened claims:</h3>
        <table>
            <thead>
                <tr>
                    <th>Policy</th>
                    <th>Type</th>
                    <th>Forname</th>
                    <th>Surname</th>
                    <th>Status</th>
                    <th>View More</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableData.filter (claim => claim.status !== "Accepted - Paid" && claim.status !== "Rejected" && claim.status !=="Value too high")
                .map( (details, index) => (
                    <OpenClaimsRow details={details} key={index} index={index} hanldeClick={hanldeClick} />
                ))}
            </tbody>
        </table>
        {show && <DisplayModal details={selectedData} handleClose={hideModal} hanldeClick={hanldeClick}/>}
        </div>
        </>
    )
}

export default OpenClaims;

