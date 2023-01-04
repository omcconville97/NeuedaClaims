
import { useState } from "react";
import { getAllClaims } from "../../data/DataFunctions";
import DataForm from "../DataForm";
import DisplayModal from "../DisplayModal";
import OpenClaimsRow from "./OpenClaimsRow";


const OpenClaims = () => {

  // const allClaims = getAllClaims();

  // const openClaims = allData.filter (claim => claim.status !== "Approved")

  const allData = getAllClaims();

  const openClaims = allData.filter (claim => claim.status !== "Accepted - Paid")

    const [tableData, setTableData] = useState(openClaims)
    const [editing, setEditing] = useState(false)
    const [editIndex, setEditIndex] = useState(false)

    



    const onEdit = (index) => {
        setEditing(true)
        setEditIndex(index)
        setShowEdit(current => !current);
    }

    const onCancel = () => {
        setEditing(false)
        setShowEdit(current => !current);
    }

    const onUpdate = ({policyNumber, title, firstName, surname, email, 
        phoneNo, insuranceType, date, estimatedWorth, reason, 
        description, status}) =>{
        const newData = tableData.slice(0, tableData.length)
        newData[editIndex] = {policyNumber, title, firstName, surname, email, 
            phoneNo, insuranceType, date, estimatedWorth, reason, 
            description, status}

        const filteredData = newData.filter (claim => claim.status !== "Accepted - Paid")
        setTableData(filteredData)
        setEditing(false)
        setEditIndex(false)
        setShowEdit(current => !current);
    }

    const [showEdit, setShowEdit] = useState(false);



    /* ==== Start of Modal ==== */
    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
    console.log("Modal",selectedRec)
    };

    const hideModal = () => {
    setShow(false);
    };
    /* ==== End of Modal ==== */

    return (
        <>
        {showEdit &&
        <DataForm 
        onCancel={onCancel}
        onUpdate={onUpdate}
        update={editing}
        data={editing ? tableData[editIndex]:{}}/>
        }
        <div className="tableContainer">
        <h2 className="formTitle">Claims to be approved</h2>
        <h3 className="formSubTitle">See below for all currently opened claims:</h3>
        <table>
            <thead>
                <tr>
                    <th>Policy</th>
                    <th>Title</th>
                    <th>Forname</th>
                    <th>Surname</th>
                    <th>Status</th>
                    <th>View More</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map( (details, index) => (
                    <OpenClaimsRow details={details} key={index} index={index} onEdit={onEdit} hanldeClick={hanldeClick}/>
                ))}
            </tbody>
        </table>
        {show && <DisplayModal details={selectedData} handleClose={hideModal} hanldeClick={hanldeClick}/>}
        </div>
        </>
    )
}

export default OpenClaims;

