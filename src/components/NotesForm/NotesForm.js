import { useEffect, useState } from "react";
import "./../UpdateAllClaims/UpdateAllClaims.css";
import "./NotesForm.css";

const NotesForm = ({onCreate, update=false, onUpdate, onCancel, data}) => {

    const [policyNumber, setPolicyNumber] = useState("")
    const [title, setTitle] = useState("")
    const [firstName, setFirstName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setphoneNumber] = useState("")
    const [insuranceType, setInsuranceType] = useState("")
    const [date, setDate] = useState("")
    const [estimatedWorth, setEstimatedWorth] = useState("")
    const [reason, setReason] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [taskNote, setTaskNote] = useState("")

    useEffect(()=> {
            if(update){
                setPolicyNumber(data.policyNumber)
                setTitle(data.title)
                setFirstName(data.firstName)
                setSurname(data.surname)
                setEmail(data.email)
                setphoneNumber(data.phoneNumber)
                setInsuranceType(data.insuranceType)
                setDate(data.date)
                setEstimatedWorth(data.estimatedWorth)
                setReason(data.reason)
                setDescription(data.description)
                setStatus(data.status)
                setTaskDate(data.taskDate)
                setTaskNote(data.taskNote)
            } else {
                setPolicyNumber("")
                setTitle("")
                setFirstName("")
                setSurname("")
                setEmail("")
                setphoneNumber("")
                setInsuranceType("")
                setDate("")
                setEstimatedWorth("")
                setReason("")
                setDescription("")
                setStatus("")
                setTaskDate("")
                setTaskNote("")
            }
    }, [update, data])

    const onSubmitCallback = (e) => {
        e.preventDefault()
        if (update){
            onUpdate({policyNumber, title, firstName, surname, email, 
                phoneNumber, insuranceType, date, estimatedWorth, reason, 
                description, status, taskDate, taskNote})
        } else {
            onCreate({policyNumber, title, firstName, surname, email, 
                phoneNumber, insuranceType, date, estimatedWorth, reason, 
                description, status, taskDate, taskNote})
        }
    }

    return (
        <div className="containerNotes">
        <form onSubmit={onSubmitCallback}>
        <h1 className="formTitle">Add Additional Information</h1>
            <div>
                <label htmlFor="taskDate">Task Date:</label>
                <input type="date" className="taskDate" id="taskDate" defaultValue={taskDate} onChange={e => setTaskDate(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="taskNote">Task Notes:</label>
                <textarea className="taskNote" id="taskNote" defaultValue={taskNote}  onChange={e => setTaskNote(e.target.value)} cols="30" rows="6"></textarea>
            </div>

            <div className="sideby">
                <button type="submit">Update</button> 
                <button className="btnCancel"onClick={onCancel}>Cancel</button>   
            </div>
        </form>
        </div>
        
    )}
    

export default NotesForm;