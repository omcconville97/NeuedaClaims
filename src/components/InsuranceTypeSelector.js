import { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import { getInsuranceType } from "../data/DataFunctions";

const InsuranceTypeSelector = (props) => {
    
    useEffect( () => {
        loadInsuranceTypes();
    }, []);

    const [uniqueInsuranceTypes, setUniqueInsuranceTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();


    const loadInsuranceTypes = () => {
        console.log("getting insurance types via rest");
            getInsuranceType()
            .then ( response => {
                if (response.status === 200) {
                    setUniqueInsuranceTypes(response.data);
                    dispatch({type:"updateInsuranceType", value : response.data});
                    setIsLoading(false);
                }
                else {
                    console.log("something went wrong");
                }
            })
            .catch ( error => {
                console.log("something went wrong", error)
            })
        

        if (props.value != null) {
            setSelectedInsuranceType(props.value);
        }
    }

    const [selectedInsuranceType, setSelectedInsuranceType] = useState("");

    const changeInsuranceType = (event) => {
        const insuranceType = event.target.value;
        props.changeInsuranceType(insuranceType);
    }

    return (<div className="claimsTypeSelector">
                <select onChange={changeInsuranceType} defaultValue={selectedInsuranceType}>
                    <option value="" disabled={true}> ---select---</option>
                    {uniqueInsuranceTypes.map (insuranceType => <option key={insuranceType} value={insuranceType}>{insuranceType}</option>)}
                </select>
            </div>)


}

export default InsuranceTypeSelector;