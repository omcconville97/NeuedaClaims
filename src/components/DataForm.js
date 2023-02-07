import {useState,useEffect} from 'react'
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
        vehicleMake:"", vehicleModel: "", vehicleYear: 0, 
        propertyAddress: "", animalType:"", animalBreed:"",
        date: "", 
        estimatedWorth: "", 
        reason: "", 
        description: "", 
        status: ""
    });

    const { policyNumber, title, firstName, surname, email, phoneNumber, 
        insuranceType, vehicleMake, vehicleModel, vehicleYear,
        propertyAddress, animalType, animalBreed, date, estimatedWorth, reason, 
        description, status} = claim;

    const onInputChange = e =>{
        setClaim({...claim,[e.target.id]:e.target.value})
    }
    
    const onInputChangeInsuranceType = e =>{
        if (e.target.value === "Vehicle") {
            setShowOptionvehicle(true);
            setShowOptionHome(false);
            setShowOptionPet(false);
        }
        else if (e.target.value === "Home"){
            setShowOptionvehicle(false);
            setShowOptionHome(true);
            setShowOptionPet(false); 
        } 
        else if(e.target.value === "Pet"){
            setShowOptionvehicle(false);
            setShowOptionHome(false);
            setShowOptionPet(true);
        }
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
    
    const [showOptionPet, setShowOptionPet] = useState(false);  
    const [showOptionvehicle, setShowOptionvehicle] = useState(false);
    const [showOptionHome, setShowOptionHome] = useState(false);   

    const vehicleOption = showOptionvehicle && 
        <div>
            <label htmlFor="vehicleMake">Make of Vehicle:</label>
            <input type="text" name="vehicleMake" id="vehicleMake" value={vehicleMake} onChange={(e) =>onInputChange(e)}/>
            
            <label htmlFor="vehicleModel">model of Vehicle:</label>
            <input type="text" name="vehicleModel" id="vehicleModel" value={vehicleModel} onChange={(e) =>onInputChange(e)}/>

            <label htmlFor="vehicleYear">Vehicle Year:</label>
            <input type="text" name="vehicleYear" id="vehicleYear" value={vehicleYear} onChange={(e) =>onInputChange(e)}/>
        </div>

    const homeOption = showOptionHome && 
        <div>
            <label htmlFor="propertyAddress">Address of property:</label>
            <input type="text" name="propertyAddress" id="propertyAddress" value={propertyAddress} onChange={(e) =>onInputChange(e)}/>
        </div>

    const petOption = showOptionPet && 
        <div>
            <label htmlFor="animalType">Type of Animal:</label>
            <input type="text" name="animalType" id="animalType" value={animalType} onChange={(e) =>onInputChange(e)}/>

            <label htmlFor="animalBreed">Breed of Animal:</label>
            <input type="text" name="animalBreed" id="animalBreed" value={animalBreed} onChange={(e) =>onInputChange(e)}/>
        </div>
   
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
                <select name="title" id="title" value={title} onChange={(e) =>onInputChange(e)} required>
                    <option value="" disabled >-- select --</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                </select>
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
        <div className="rightside">
                <div>
                    <label htmlFor="insuranceType">Insurance Type:</label>
                    <select name="insuranceType" id="insuranceType" value={insuranceType} onChange={(e) =>onInputChangeInsuranceType(e)}
                     required>
                    <option value="" disabled >-- select --</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="Home">Home</option>
                        <option value="Pet">Pet</option>
                    </select>

                    {vehicleOption}
                    {homeOption}
                    {petOption}
                </div>

                <div>
                    <label htmlFor="date">Start Date:</label>
                    <input type="date" name="date" id="date" value={date} onChange={(e) =>onInputChange(e)} required/>
                </div>
                <div>
                    <label htmlFor="estimatedWorth">Estimated Worth:</label>
                    <input name="estimatedWorth" id="estimatedWorth" value={estimatedWorth} 
                    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                    onChange={(e) =>onInputChange(e)} required/>
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