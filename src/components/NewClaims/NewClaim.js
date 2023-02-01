import './NewClaim.css'
import { useReducer, useState } from "react";
import { addNewClaim } from "../../data/DataFunctions";

const NewClaim = () => {

    const [message, setMessage] = useState("");

    const initialNewClaimState = {policyNumber : "", title: "",
     firstName: "", surname: "", email: "",phoneNumber:"", claimType: "", date: new Date().toISOString().slice(0,10), estimatedWorth:"", reason: "", description: "",
     insuranceType:"", vehicleMake:"", vehicleModel: "", vehicleYear: "", 
     propertyAddress: "",
     animalType:"", animalBreed:"",
     status: "Awaiting Assessment"}

     const formReducer = (state, data) => {
        return {...state, [data.field] : data.value}
    }

    const [newClaim, dispatch] = useReducer(formReducer, initialNewClaimState);
 
    const handleChange = (event) => {
        //event.target.id = the field
       // event.target.value  = the value
       dispatch({field : event.target.id, value : event.target.value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setMessage("Saving...");
        addNewClaim(newClaim)
            .then( response => {
                if (response.status === 200) {
                    setMessage("New Claim added with policy number " + response.data.id);
                }
                else {
                    setMessage("Something went wrong - status code was " + response.status);
                }
                
            } )
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

            <label htmlFor="vehicleModel">Make of Vehicle:</label>
            <input type="text" name="vehicleModel" id="vehicleModel" placeholder="Model" value={newClaim.vehicleModel} onChange={handleChange}/>

            <label htmlFor="vehicleYear">Vehicle Year:</label>
            <input type="text" name="vehicleYear" id="vehicleYear" placeholder="Year" value={newClaim.vehicleYear} onChange={handleChange}/>
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
            <input type="text" name="animalType" id="animalType" placeholder="e.g dog or cat" value={newClaim.animalType} onChange={handleChange}/>

            <label htmlFor="animalBreed">Breed of Animal:</label>
            <input type="text" name="animalBreed" id="animalBreed" placeholder="breed" value={newClaim.animalBreed} onChange={handleChange}/>
        </div>
    

    return ( 
        <div className="container">
            <form onSubmit={handleSubmit}>
                    <h2 className="formTitle">Create New Claim</h2>

                    <label htmlFor="policyNumber">Policy Number:</label>
                    <input type="text" name="policyNumber" id="policyNumber" placeholder="Policy No." 
                    value={newClaim.policyNumber} onChange={handleChange} />

                    <label htmlFor="title">Title:</label>
                    <select name="title" id="title" value={newClaim.title} onChange={handleChange}>
                        <option value="" disabled >-- select --</option>
                        <option value="Mr">Mr</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Ms">Ms</option>
                    </select>

                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" 
                    value={newClaim.firstName} onChange={handleChange}/>

                    <label htmlFor="surname">Surname:</label>
                    <input type="text" name="surname" id="surname" placeholder="Surname" 
                    value={newClaim.surname} onChange={handleChange}/>

                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" id="email" placeholder="Email Address" 
                    value={newClaim.email} onChange={handleChange}/>
                    
                    <label htmlFor="phoneNumber">Phone Number:</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone No." 
                    value={newClaim.phoneNumber} onChange={handleChange}/>

                    <label htmlFor="startDate">Start Date:</label>
                    <input type="date" name="startDate" id="startDate" 
                    value={newClaim.date} onChange={handleChange}/>

                    <label htmlFor="estimatedWorth">Claim Worth:</label>
                    <input type="text" name="estimatedWorth" id="estimatedWorth" placeholder="£..." 
                    value={newClaim.estimatedWorth} onChange={handleChange}/>

                    <label htmlFor="insuranceType">Insurance Type:</label>
                    <select name="insuranceType" id="insuranceType" value={additionalOption}
                    onChange={(e) => {
                        SetAdditionalOption(e.target.value);
                        if (e.target.value === "vehicle") {
                            setShowOptionvehicle(true);
                            setShowOptionHome(false);
                            setShowOptionPet(false);
                            
                        }
                        else if (e.target.value === "home"){
                            setShowOptionvehicle(false);
                            setShowOptionHome(true);
                            setShowOptionPet(false);
                        } 
                        else if(e.target.value === "pet"){
                            setShowOptionvehicle(false);
                            setShowOptionHome(false);
                            setShowOptionPet(true);
                        }
                      }}
                    >
                        <option value="" disabled >-- select --</option>
                        <option value="vehicle">Vehicle</option>
                        <option value="home">Home</option>
                        <option value="pet">Pet</option>
                    </select>

                    {vehicleOption}
                    {homeOption}
                    {petOption}

                    <label htmlFor="reason">Reason:</label>
                    <input type="text" name="reason" id="reason" value={newClaim.reason} onChange={handleChange}/>

                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" value={newClaim.description} onChange={handleChange} cols="19" rows="4"></textarea>
                    
                    <button type="submit" name="registerButton">Register</button>
                    <div>{message}</div> 
            </form>
        </div>
    )
}

export default NewClaim;