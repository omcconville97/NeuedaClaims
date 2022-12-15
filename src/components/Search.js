import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Search = (props) => {

    const [localSearchTerm, setLocalSearchTerm] = useState("");
    const [valid, setValid] = useState(true);
    const [touched, setTouched] = useState(false);
    const navigate = useNavigate();

    const checkValidity = (value) => {
            setValid(value.trim().length > 0)
    }

    const handleChange = (event) => {
        setTouched(true);
        setLocalSearchTerm(event.target.value);
        checkValidity(event.target.value);
    }

    const doSearch = (event) => {
        event.preventDefault();
        console.log("Search Term", localSearchTerm)
        props.setSearchTerm(localSearchTerm);
        navigate(`/searchclaim/${localSearchTerm}`);
    }

    const clearForm = () => {
        setLocalSearchTerm("");
        setTouched(false);
        setValid(true);
        props.setSearchTerm("");
    }

    return (
        <div className="searchFormat">
            <form onSubmit={doSearch}>
                    <h2 className="formTitle">Search for a claim</h2>

                    <p>Enter a policy number and click search:</p>

                    <label htmlFor="policyNumber">Policy Number</label>
                    <input onChange={handleChange} value={localSearchTerm} type="text" name="policyNumber" id="policyNumber" placeholder="Policy No." 
                    style ={{border: valid ? "1px solid #000" : "2px solid #f00"}}/>

                    {/* <label htmlFor="surname">Surname</label>
                    <input type="text" name="surname" id="surname" placeholder="Surname" /> */}

                    <div className="sideby">
                    <button type="submit" name="registerButton" disabled={!valid || !touched}>Search</button>
                    <button className="btnSearch" onClick={clearForm} >Reset</button>
                    </div>
            </form>
        </div>
    )

}
export default Search;