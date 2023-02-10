
import { useEffect, useState } from "react";
import { getAllClaimsAxios } from "../../data/DataFunctions";
import DisplayModal from "../DisplayModal";
import NotesForm from "../NotesForm/NotesForm";
import ArchivedClaimsRow from "./ArchivedClaimsRow";


const ArchivedClaims = () => {

    const [tableData, setTableData] = useState([])
    const [loading, setLoading] = useState(true);


    const loadDataAxios = () => {
    getAllClaimsAxios()
        .then(response => {
            const filtered = response.data.filter(claim => claim.status === "Accepted - Paid" || claim.status === "Rejected" || claim.status ==="Value too high")
            setTableData(filtered);
            setLoading(false);
        })
        .catch(error => {
            console.log("something went wrong", error);
        });
    };

    useEffect(() => loadDataAxios(), []);
    
    const [editIndex, setEditIndex] = useState(false)

    const onEdit = (index) => {
        
        setEditIndex(index)
        setShowEditNotes(false)
    }

    /* ==== Start of Add Notes ==== */
    const [editingNotes, setEditingNotes] = useState(false)

    const onUpdateNotes = ({policyNumber, title, firstName, surname, email, 
      phoneNumber, insuranceType, date, estimatedWorth, reason, 
      description, status, taskDate, taskNote}) =>{
      const newData = tableData.slice(0, tableData.length)
      newData[editIndex] = {policyNumber, title, firstName, surname, email, 
          phoneNumber, insuranceType, date, estimatedWorth, reason, 
          description, status, taskDate, taskNote}

      const filteredData = newData.filter (claim => claim.status === "Accepted - Paid" || claim.status === "Rejected" || claim.status ==="Value too high")
      setTableData(filteredData)
      setEditingNotes(false)
      setEditIndex(false)
      setShowEditNotes(current => !current);
    }

    const onCancelNotes = () => {
      setEditingNotes(false)
      setShowEditNotes(current => !current);
    }

    const onEditNotes = (index) => {
      setEditingNotes(true)
      setEditIndex(index)
      setShowEditNotes(current => !current);
    }

    const [showEditNotes, setShowEditNotes] = useState(false);
    /* ==== End of Add Notes ==== */


    /* ==== Start of Modal ==== */
    const [show, setShow] = useState(false);
    const [selectedData, setSelectedData] = useState({});

    const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
    console.log("Modal",selectedRec)
    setShowEditNotes(false);
    };

    const hideModal = () => {
    setShow(false);
    };
    /* ==== End of Modal ==== */


    return (
        <>
        {showEditNotes &&
        <NotesForm 
        onCancel={onCancelNotes}
        onUpdate={onUpdateNotes}
        update={editingNotes}
        data={editingNotes ? tableData[editIndex]:{}}/>
        }
        <div className="tableContainer">
        <h2 className="formTitle">Archived Claims</h2>
        {loading && <p style={{textAlign:"center"}}>The data is loading please wait...</p>}
        <h3 className="formSubTitle">See below for all Accepted and Rejected Claims:</h3>
        <table>
            <thead>
                <tr>
                    <th>Policy</th>
                    <th>Forname</th>
                    <th>Surname</th>
                    <th>Status</th>
                    <th>Value</th>
                    <th>Reason</th>
                    <th>View More</th>
                </tr>
            </thead>
            <tbody>
                {tableData.filter(claim => claim.status === "Accepted - Paid" || claim.status === "Rejected" || claim.status ==="Value too high")
                .map( (details, index) => (
                    <ArchivedClaimsRow details={details} key={index} index={index} onEdit={onEdit} hanldeClick={hanldeClick} onEditNotes={onEditNotes}/>
                ))}
            </tbody>
        </table>
        {show && <DisplayModal details={selectedData} handleClose={hideModal} hanldeClick={hanldeClick}/>}
        </div>
        </>
    )
}

export default ArchivedClaims;