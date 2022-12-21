import './NewClaim.css'
import { useReducer, useState } from "react";
import { addNewClaim } from "../../data/DataFunctions";

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

    const [additionalOption, SetAdditionalOption] = useState("");
    
    const [showOptionPet, setShowOptionPet] = useState(false);  
    const [showOptionCar, setShowOptionCar] = useState(false);
    const [showOptionLife, setShowOptionLife] = useState(false); 
    const [showOptionHome, setShowOptionHome] = useState(false);   

    const carOption = showOptionCar && 
        <div>
            <p>Please select desired Car Insurance Cover:</p>
        <label className="Radio" htmlFor="fullyComp">
            <input className="Radio-Input" type="radio" id="fullyComp" name="input" value="fullyComp" onChange={handleChange}/>
            Fully Comprehensive
        </label>

        <label className="Radio" htmlFor="thirdParty">
            <input className="Radio-Input" type="radio" id="thirdParty" name="input" value="thirdParty" onChange={handleChange} />
            Third<br/>Party
        </label>
        <label className="Radio" htmlFor="TPFT">
            <input className="Radio-Input" type="radio" id="TPFT" name="input" value="TPFT" onChange={handleChange} />
            Third Party Fire + Theft
        </label>
        </div>

    const lifeOption = showOptionLife && 
        <div>
            <p>Please select desired Life Insurance Cover:</p>
        <label className="Radio" htmlFor="criticalIllness">
            <input className="Radio-Input" type="radio" id="criticalIllness" name="input" value="criticalIllness" onChange={handleChange}/>
            Critical Illness
        </label>

        <label className="Radio" htmlFor="over50s">
            <input className="Radio-Input" type="radio" id="over50s" name="input" value="over50s" onChange={handleChange} />
            Over<br/>50's
        </label>
        <label className="Radio" htmlFor="group">
            <input className="Radio-Input" type="radio" id="group" name="input" value="group" onChange={handleChange} />
            Group Insurance
        </label>
        </div>

    const homeOption = showOptionHome && 
        <div>
            <p>Please select desired Home Insurance Cover:</p>
        <label className="Radio" htmlFor="buildings">
            <input className="Radio-Input" type="radio" id="buildings" name="input" value="buildings" onChange={handleChange}/>
            Buildings Cover
        </label>

        <label className="Radio" htmlFor="content">
            <input className="Radio-Input" type="radio" id="content" name="input" value="content" onChange={handleChange} />
            Content Cover
        </label>
        <label className="Radio" htmlFor="buildingsAndContent">
            <input className="Radio-Input" type="radio" id="buildingsAndContent" name="input" value="buildingsAndContent" onChange={handleChange} />
            Buildings + Content
        </label>
        </div>

    const petOption = showOptionPet && 
        <div>
            <p>Please select desired Pet Insurance Cover:</p>
        <label className="Radio" htmlFor="lifeTime">
            <input className="Radio-Input" type="radio" id="lifeTime" name="input" value="lifeTime" onChange={handleChange}/>
            Life Time
        </label>

        <label className="Radio" htmlFor="annual">
            <input className="Radio-Input" type="radio" id="annual" name="input" value="annual" onChange={handleChange} />
            Annual
        </label>
        <label className="Radio" htmlFor="acident">
            <input className="Radio-Input" type="radio" id="acident" name="input" value="acident" onChange={handleChange} />
            Accidental
        </label>
        </div>
    

    return ( 
        <div className="container">
            <form onSubmit={handleSubmit}>
                    <h2 className="formTitle">Create New Claim</h2>

                    <label htmlFor="policyNumber">Policy Number</label>
                    <input type="text" name="policyNumber" id="policyNumber" placeholder="Policy No." 
                    value={newClaim.orderId} onChange={handleChange} />

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

                    <label htmlFor="policyType">Policy Type:</label>
                    <select name="policyType" id="policyType" value={additionalOption} type="text"
                    onChange={(e) => {
                        SetAdditionalOption(e.target.value);
                        if (e.target.value === "1") {
                            setShowOptionCar(true);
                            setShowOptionLife(false);
                            setShowOptionHome(false);
                            setShowOptionPet(false);
                            
                        }
                        else if (e.target.value === "2") {
                            setShowOptionCar(false);
                            setShowOptionLife(true);
                            setShowOptionHome(false);
                            setShowOptionPet(false);
                        }
                        else if (e.target.value === "3"){
                            setShowOptionCar(false);
                            setShowOptionLife(false);
                            setShowOptionHome(true);
                            setShowOptionPet(false);
                        } else {
                            setShowOptionCar(false);
                            setShowOptionLife(false);
                            setShowOptionHome(false);
                            setShowOptionPet(true);
                        }
                      }}
                    >
                        <option value="" disabled >-- select --</option>
                        <option value="1">Car</option>
                        <option value="2">Life</option>
                        <option value="3">Home</option>
                        <option value="4">Pet</option>
                    </select>

                    {carOption}
                    {lifeOption}
                    {homeOption}
                    {petOption}
                    
                    <button type="submit" name="registerButton">Register</button>
                    <div>{message}</div> 
            </form>
        </div>
    )
}

export default NewClaim;