import { useReducer, useState } from "react";
import { addNewClaim } from "../data/DataFunctions";

const NewClaim = () => {

    const [message, setMessage] = useState("");

    const initialNewClaimState = {policyNumber : "", title: "",
     firstName: "", surname: "", email: "",phoneNo:"", claimType: "",
     insuranceType:"", status: "Awaiting Assessment"}

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


    return ( 
        <div className="container">
            <form onSubmit={handleSubmit}>
                    <h2 className="formTitle">Register New Claim</h2>

                    <label htmlFor="policyNumber">Policy Number</label>
                    <input type="text" name="policyNumber" id="policyNumber" placeholder="Policy No." 
                    value={newClaim.orderId} onChange={handleChange} />

                    <label htmlFor="claimType">Claim Type:</label>
                    <select name="claimType" id="claimType" value={newClaim.claimType} onChange={handleChange}>
                        <option value="" disabled >-- select --</option>
                        <option value="car">Car</option>
                        <option value="life">Life</option>
                        <option value="home">Home</option>
                        <option value="pet">Pet</option>
                    </select>

                    <label htmlFor="title">Title</label>
                    <select name="title" id="title" value={newClaim.title} onChange={handleChange}>
                        <option value="" disabled >-- select --</option>
                        <option value="mr">Mr</option>
                        <option value="mrs">Mrs</option>
                        <option value="ms">Ms</option>
                    </select>

                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" 
                    value={newClaim.firstName} onChange={handleChange}/>

                    <label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" id="surname" placeholder="Surname" 
                    value={newClaim.surname} onChange={handleChange}/>

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email Address" 
                    value={newClaim.email} onChange={handleChange}/>
                    
                    <label htmlFor="phoneNo">Phone Number</label>
                    <input type="text" name="phoneNo" id="phoneNo" placeholder="Phone No." 
                    value={newClaim.phoneNo} onChange={handleChange}/>

                    <button type="submit" name="registerButton">Register</button>
                    <div>{message}</div> 
   
            </form>
        </div>
    )
}

export default NewClaim;