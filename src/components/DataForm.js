import { useEffect, useState } from "react";
import "./UpdateAllClaims/UpdateAllClaims.css";

const DataForm = ({onCreate, update=false, onUpdate, onCancel, data}) => {

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
                description, status,taskDate, taskNote})
        } else {
            onCreate({policyNumber, title, firstName, surname, email, 
                phoneNumber, insuranceType, date, estimatedWorth, reason, 
                description, status, taskDate, taskNote})
        }
    }

    return (
        <div className="containerEdit">
        <form onSubmit={onSubmitCallback}>
        <h1 className="formTitle">Edit Info</h1>
        <div className="side-by-side">

        <div>

            <div>
                <label htmlFor="policyNumber">Policy Number:</label>
                <input type="text" name="policyNumber" id="policyNumber" value={policyNumber} onChange={e => setPolicyNumber(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="firstName">Name:</label>
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={e => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="surname">Surname:</label>
                <input type="text" name="surname" id="surname" value={surname} onChange={e => setSurname(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={e => setphoneNumber(e.target.value)}/>
            </div>

            </div>

        <div>

            <div>
                <label htmlFor="insuranceType">Insurance Type:</label>
                <input type="text" name="insuranceType" id="insuranceType" value={insuranceType} onChange={e => setInsuranceType(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="date">Start Date:</label>
                <input type="text" name="date" id="date" value={date} onChange={e => setDate(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="estimatedWorth">Estimated Worth:</label>
                <input type="text" name="estimatedWorth" id="estimatedWorth" value={estimatedWorth} onChange={e => setEstimatedWorth(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="reason">Breif Reason:</label>
                <input type="text" name="reason" id="reason" value={reason} onChange={e => setReason(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea name="description" id="description" value={description} onChange={e => setDescription(e.target.value)} cols="19" rows="4"></textarea>
            </div>
            <div>
                <label htmlFor="status">Claim Status:</label>
                <select name="status" id="status" value={status} onChange={e => setStatus(e.target.value)}>
                        <option value="" disabled >-- select --</option>
                        <option value="Awaiting Assessment">Awaiting Assessment</option>
                        <option value="On Going">On Going</option>
                        <option value="Rejected">Rejected</option>
                        <option value="Accepted - Awaiting Payment">Accepted - Awaiting Payment</option>
                        <option value="Accepted - Paid">Accepted - Paid</option>
                        <option value="Value too high">Value too high</option>
                    </select>
            </div>
            </div>
            </div>
            <div className="sideby">
                <button type="submit">Update</button> 
                <button className="btnCancel"onClick={onCancel}>Cancel</button>   
            </div>
        </form>
        </div>
        
    )}
    

export default DataForm;