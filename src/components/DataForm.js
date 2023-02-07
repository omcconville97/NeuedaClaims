import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import { editExistingClaim } from '../data/DataFunctions';

function DataForm() {
    const navigate = useNavigate();
    const {id} = useParams(); // getting url id        
    const URL = `http://localhost:8080/api/claim/${id}`;

   
    useEffect(()=>{
        getClaim();
    },[])
    const [claim, setClaim] = useState({
        policyNumber: "", 
        title: "", 
        firstName: "", 
        surname: "", 
        email: "", 
        phoneNumber: "", 
        insuranceType: "", 
        date: "", 
        estimatedWorth: "", 
        reason: "", 
        description: "", 
        status: ""
    });
    const { policyNumber, title, firstName, surname, email, 
        phoneNumber, insuranceType, date, estimatedWorth, reason, 
        description, status} = claim;
    const onInputChange = e =>{
        setClaim({...claim,[e.target.id]:e.target.value})
    }
    
    const FormHandle = e =>{
        e.preventDefault();
        editDataAxios();
        navigate("/openclaims")    
    }

    const editDataAxios = () => {
        editExistingClaim(claim, id)
            .then(response => {
                setClaim(response);
            })
            .catch(error => {
                console.log("something went wrong on data form", error);
            });
        };
    
    const getClaim = async e =>{
        const claimInfo = await axios.get(URL);
        setClaim(claimInfo.data);       
    }
   
    return (
        <div className="container">
        <form onSubmit={e => FormHandle(e)}>
        <div className="sideby">
        <div>
            <div>
                <label htmlFor="policyNumber">Policy Number:</label>
                <input type="text" name="policyNumber" id="policyNumber" value={policyNumber} onChange={(e) =>onInputChange(e)} required/>
            </div>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" value={title} onChange={(e) =>onInputChange(e)} required/>
            </div>
            <div>
                <label htmlFor="firstName">Name:</label>
                <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) =>onInputChange(e)} required/>
            </div>
            <div>
                <label htmlFor="surname">Surname:</label>
                <input type="text" name="surname" id="surname" value={surname} onChange={(e) =>onInputChange(e)} required/>
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) =>onInputChange(e)} required/>
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" name="phoneNumber" id="phoneNumber" value={phoneNumber} onChange={(e) =>onInputChange(e)} required/>
            </div>
            <div>
                <label htmlFor="status">Claim Status:</label>
                <select name="status" id="status" value={status} onChange={(e) =>onInputChange(e)} required>
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
        <div>
                <div>
                    <label htmlFor="insuranceType">Insurance Type:</label>
                    <input type="text" name="insuranceType" id="insuranceType" value={insuranceType} onChange={(e) =>onInputChange(e)} required/>
                </div>
                <div>
                    <label htmlFor="date">Start Date:</label>
                    <input type="text" name="date" id="date" value={date} onChange={(e) =>onInputChange(e)} required/>
                </div>
                <div>
                    <label htmlFor="estimatedWorth">Estimated Worth:</label>
                    <input type="text" name="estimatedWorth" id="estimatedWorth" value={estimatedWorth} onChange={(e) =>onInputChange(e)} required/>
                </div>
                <div>
                    <label htmlFor="reason">Breif Reason:</label>
                    <input type="text" name="reason" id="reason" value={reason} onChange={(e) =>onInputChange(e)} required/>
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={description} onChange={(e) =>onInputChange(e)} cols="19" rows="4"></textarea>
                </div>
            </div>
        </div>
        <div className="sideby">
          <button type="submit">Update</button> 
          <button type='submit'className="btnCancel" onClick={()=>navigate("/openclaims")}>Cancel</button>   
        </div>
      </form>
    </div>    
    )
}
export default DataForm;