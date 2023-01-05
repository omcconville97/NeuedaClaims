
import { useState } from "react";
import { getAllClaims } from "../../data/DataFunctions";
import DataForm from "../DataForm";
import DisplayModal from "../DisplayModal";
import NotesForm from "../NotesForm/NotesForm";
import ArchivedClaimsRow from "./ArchivedClaimsRow";


const ArchivedClaims = () => {

  const allData = getAllClaims();

  const openClaims = allData.filter (claim => claim.status === "Accepted - Paid" || claim.status === "Rejected")

    const [tableData, setTableData] = useState(openClaims)
    
    const [editIndex, setEditIndex] = useState(false)

    const onEdit = (index) => {
        
        setEditIndex(index)
        setShowEdit(current => !current);
        setShowEditNotes(false)
    }

    const [showEdit, setShowEdit] = useState(false);



    /* ==== Start of Add Notes ==== */
    const [editingNotes, setEditingNotes] = useState(false)

    const onUpdateNotes = ({policyNumber, title, firstName, surname, email, 
      phoneNo, insuranceType, date, estimatedWorth, reason, 
      description, status, taskDate, taskNote}) =>{
      const newData = tableData.slice(0, tableData.length)
      newData[editIndex] = {policyNumber, title, firstName, surname, email, 
          phoneNo, insuranceType, date, estimatedWorth, reason, 
          description, status, taskDate, taskNote}

      const filteredData = newData.filter (claim => claim.status === "Accepted - Paid")
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
      setShowEdit(false)
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
    setShowEdit(false)
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
        <h3 className="formSubTitle">See below for all Accepted and Rejected Claims:</h3>
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

