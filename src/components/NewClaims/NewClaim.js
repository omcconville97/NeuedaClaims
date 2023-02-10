import { useReducer, useState } from "react";
import { addNewClaim } from "../../data/DataFunctions";

const NewClaim = () => {

    const [message, setMessage] = useState("");

    const initialNewClaimState = {policyNumber : "", title: "",
     firstName: "", surname: "", email: "",phoneNumber:"", claimType: "", date: new Date().toISOString().slice(0,10), estimatedWorth:"", reason: "", description: "",
     insuranceType:"", vehicleMake:"", vehicleModel: "", vehicleYear: 0, 
     propertyAddress: "",
     animalType:"", animalBreed:"",
     taskDate:new Date().toISOString().slice(0,10), taskNote:"",
     status: "Awaiting Assessment"}

     const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);
 
    const handleChange = (event) => {
       dispatch({field : event.target.id, value : event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving...");
        if (newClaim.estimatedWorth > 500) {
            alert("Small Claims Application: Claims over £500 have a higher chance of rejection by agents")
            }
        addNewClaim(newClaim)
            .then( response => {
                if (response.status === 200) {
                    setMessage("New Claim added with policy number " + response.data.id);
                }
                else {
                    setMessage("Something went wrong - status code was " + response.status);
                }
                
            } 
            )
            .catch( error => {
                setMessage("Something went wrong - " + error);
            })
    } 

    const [additionalOption, SetAdditionalOption] = useState("");
    
    const [showOptionPet, setShowOptionPet] = useState(false);  
    const [showOptionvehicle, setShowOptionvehicle] = useState(false);
    const [showOptionHome, setShowOptionHome] = useState(false);   

    const vehicleOption = showOptionvehicle && 
        <div>
        <p>Please complete further Vehicle Insurance Details:</p>
            <label htmlFor="vehicleMake">Make of Vehicle:</label>
            <input type="text" name="vehicleMake" id="vehicleMake" placeholder="Make" value={newClaim.vehicleMake} onChange={handleChange}/>

            <label htmlFor="vehicleModel">Model of Vehicle:</label>
            <input type="text" name="vehicleModel" id="vehicleModel" placeholder="Model" value={newClaim.vehicleModel} onChange={handleChange}/>

            <label htmlFor="vehicleYear">Vehicle Year:</label>
            <input type="text" name="vehicleYear" id="vehicleYear" placeholder="Year" 
             onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
             value={newClaim.vehicleYear} onChange={handleChange}/>
        </div>

    const homeOption = showOptionHome && 
        <div>
            <p>Please complete further Home Insurance details:</p>
            <label htmlFor="propertyAddress">Address of property:</label>
            <input type="text" name="propertyAddress" id="propertyAddress" placeholder="Address" value={newClaim.propertyAddress} onChange={handleChange}/>
        </div>

    const petOption = showOptionPet && 
        <div>
            <p>Please complete further Pet Insurance details:</p>
            <label htmlFor="animalType">Type of Animal:</label>
            <input type="text" name="animalType" id="animalType" placeholder="e.g. Dog or Cat" value={newClaim.animalType} onChange={handleChange}/>

            <label htmlFor="animalBreed">Breed of Animal:</label>
            <input type="text" name="animalBreed" id="animalBreed" placeholder="Breed" value={newClaim.animalBreed} onChange={handleChange}/>
        </div>
    

    return ( 
        <div className="container">
            <form onSubmit={handleSubmit}>
                    <h2 className="formTitle">Create New Claim</h2>

                    <label htmlFor="policyNumber">Policy Number:</label>
                    <input type="text" name="policyNumber" id="policyNumber" placeholder="e.g. CF..." 
                    value={newClaim.policyNumber} onChange={handleChange} required/>

                    <label htmlFor="title">Title:</label>
                    <select name="title" id="title" value={newClaim.title} onChange={handleChange} required>
                        <option value="" disabled >-- select --</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                    </select>

                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" 
                    value={newClaim.firstName} onChange={handleChange} required/>

                    <label htmlFor="surname">Surname:</label>
                    <input type="text" name="surname" id="surname" placeholder="Surname" 
                    value={newClaim.surname} onChange={handleChange} required/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="email" placeholder="Email Address" 
                    value={newClaim.email} onChange={handleChange} required/>
                    
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone No." 
                    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                    value={newClaim.phoneNumber} onChange={handleChange} required/>

                    <label htmlFor="date">Start Date:</label>
                    <input type="date" name="date" id="date" 
                    value={newClaim.date} onChange={handleChange} required/>

                    <label htmlFor="estimatedWorth">Claim Worth:</label>
                    <input name="estimatedWorth" id="estimatedWorth" placeholder="£..." 
                    onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}}
                    value={newClaim.estimatedWorth} onChange={handleChange} required/>

                    <label htmlFor="insuranceType">Insurance Type:</label>
                    <select name="insuranceType" id="insuranceType" value={newClaim.insuranceType = additionalOption} required
                    onChange={(e) => {
                        SetAdditionalOption(e.target.value);
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
                      }}
                    >
                        <option value="" disabled >-- select --</option>
                        <option value="Vehicle">Vehicle</option>
                        <option value="Home">Home</option>
                        <option value="Pet">Pet</option>
                    </select>

                    {vehicleOption}
                    {homeOption}
                    {petOption}

                    <label htmlFor="reason">Reason:</label>
                    <input type="text" name="reason" id="reason" value={newClaim.reason} onChange={handleChange} required/>

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={newClaim.description} onChange={handleChange} cols="19" rows="4"></textarea>
                    
                    <button type="submit" name="registerButton">Register</button>
                    <div>{message}</div> 
            </form>
        </div>
    )
}

export default NewClaim;