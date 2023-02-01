import { useState } from "react";
import { getAllClaims } from "../../data/DataFunctions";
import DataForm from "../DataForm";
import DisplayModal from "../DisplayModal";
import DataRow from "./DataRow"



const DataTable = () => {

    const allData = getAllClaims();

    const [tableData, setTableData] = useState(allData)
    const [editing, setEditing] = useState(false)
    const [editIndex, setEditIndex] = useState(false)
    

    const onSave = ({policyNumber, title, firstName, surname, email, 
        phoneNumber, insuranceType, date, estimatedWorth, reason, 
        description, status}) => {
        const newData = tableData.slice(0, tableData.length)
        newData.push({
            policyNumber, title, firstName, surname, email, 
      phoneNumber, insuranceType, date, estimatedWorth, reason, 
      description, status
        })
        setTableData(newData)
    }

    const onDelete = (index) => {
        const newData = tableData.slice(0, tableData.length)
        newData.splice(index, 1)
        newData.splice()
        setTableData(newData)
    }

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
        phoneNumber, insuranceType, date, estimatedWorth, reason, 
        description, status}) =>{
        const newData = tableData.slice(0, tableData.length)
        newData[editIndex] = {policyNumber, title, firstName, surname, email, 
            phoneNumber, insuranceType, date, estimatedWorth, reason, 
            description, status}
        setTableData(newData)
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
        onCreate={onSave} 
        onCancel={onCancel}
        onUpdate={onUpdate}
        update={editing}
        data={editing ? tableData[editIndex]:{}}/>
        }
        <div className="tableContainer">
        <h2 className="formTitle">Results</h2>
        <table>
            <thead>
                <tr>
                    <th>Policy</th>
                    <th>Title</th>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map( (details, index) => (
                    <DataRow details={details} key={index} index={index} onDelete={onDelete} onEdit={onEdit} hanldeClick={hanldeClick}/>
                ))}
            </tbody>
        </table>
        {show && <DisplayModal details={selectedData} handleClose={hideModal} hanldeClick={hanldeClick}/>}
        
    
        </div>
        </>
    )
}

export default DataTable;