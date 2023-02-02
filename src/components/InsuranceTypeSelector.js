import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getInsuranceType } from "../data/DataFunctions";

const InsuranceTypeSelector = (props) => {
    
    useEffect( () => {
        loadInsuranceTypes();
    }, []);

    const [uniqueInsuranceTypes, setUniqueInsuranceTypes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const insuranceTypesInRedux = useSelector( state => state.insuranceTypes);
    const timeOfLastFetch = useSelector( state => state.lastFetch);
    const dispatch = useDispatch();


    const loadInsuranceTypes = () => {

        //do we have any insuranceTypes in redux?
        if(insuranceTypesInRedux.length > 0 && new Date().getTime() - timeOfLastFetch < 60000) {
            console.log("using insuranceTypes from redux");
            setUniqueInsuranceTypes(insuranceTypesInRedux);
            setIsLoading(false);
        }
        
        //if we do, use them, if not, get them from rest + save them in redux
        else {
        console.log("getting insurance types via rest");
            getInsuranceType()
            .then ( response => {
                if (response.status === 200) {
                    setUniqueInsuranceTypes(response.data);
                    dispatch({type:"updateInsuranceTypes", value : response.data});
                    setIsLoading(false);
                }
                else {
                    console.log("something went wrong");
                }
            })
            .catch ( error => {
                console.log("something went wrong", error)
            })
        }

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