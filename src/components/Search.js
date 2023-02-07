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
        navigate(`/find/${localSearchTerm}`);
    }

    const clearForm = () => {
        setLocalSearchTerm("");
        setTouched(false);
        setValid(true);
        props.setSearchTerm("");
    }

    return (
        <div className="container">
            <div className="searchFormat">
            <form onSubmit={doSearch}>
                    <h2 className="formTitle">Search for a claim</h2>

                    <p>Please enter a Policy Number or Surname:</p>
                    <input onChange={handleChange} value={localSearchTerm} type="text" name="policyNumber" id="policyNumber" placeholder="search.."
                    className={!valid ? 'searchBoxError' : ''}/>
                    
                    <div className="sideby">
                    <button type="submit" name="registerButton" disabled={!valid || !touched}>Search</button>
                    <button className="btnSearch" onClick={clearForm} >Reset</button>
                    </div>
            </form>
            </div>
        </div>
    )

}
export default Search;