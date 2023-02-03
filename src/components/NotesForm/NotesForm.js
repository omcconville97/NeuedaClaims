import { useEffect, useState } from "react";
import "./NotesForm.css";
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import { editExistingClaim } from '../../data/DataFunctions';

function NotesForm() {
    const navigate = useNavigate();
    const {id} = useParams(); // getting url id        
    const URL = `http://localhost:8080/api/claim/${id}`;
   
    useEffect(()=>{
        getClaim();
    },[])
    const [claim, setClaim] = useState({
        taskDate: "", 
        taskNote: ""   
    });
    const {taskDate, taskNote} = claim;
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
                console.log("something went wrong", error);
            });
        };
    
    const getClaim = async e =>{
        const claimInfo = await axios.get(URL);
        setClaim(claimInfo.data);       
    }

    return (
        <div className="containerNotes">
        <form onSubmit={e => FormHandle(e)}>
        <h1 className="formTitle">Add Additional Information</h1>
            <div>
                <label htmlFor="taskDate">Task Date:</label>
                <input type="date" className="taskDate" id="taskDate" defaultValue={taskDate} onChange={(e) =>onInputChange(e)}/>
            </div>
            <div>
                <label htmlFor="taskNote">Task Notes:</label>
                <textarea className="taskNote" id="taskNote" defaultValue={taskNote}  onChange={(e) =>onInputChange(e)} cols="30" rows="6"></textarea>
            </div>

            <div className="sideby">
                <button type="submit">Update</button> 
                <button className="btnCancel"onClick={()=>navigate("/openclaims")}>Cancel</button>   
            </div>
        </form>
        </div>
        
    )}
    

export default NotesForm;