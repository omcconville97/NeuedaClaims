import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getStatusType } from "../data/DataFunctions";

const StatusSelector = (props) => {

    useEffect( () => {
        loadStatuses();
    } , []);

    const [uniqueStatuses, setUniqueStatuses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const statusesInRedux = useSelector( state => state.statuses);
    const timeOfLastFetch = useSelector( state => state.lastFetch);
    const dispatch = useDispatch();

    const loadStatuses = () => {

        //if we do, use them, if not, get them from rest + save them in redux
        
            console.log("getting Statuses via rest");
            getStatusType()
            .then ( response => {
                if (response.status === 200) {
                    setUniqueStatuses(response.data);
                    dispatch({type:"updateStatuses", value : response.data});
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
            setSelectedStatus(props.value);
        }
    }

    const [selectedStatus, setSelectedStatus] = useState("");

    const changeStatus = (event) => {
        const status = event.target.value;
        props.changeStatus(status);
    }


    return (<div className="transactionsCountrySelector">
    Select Status: <select onChange={changeStatus} defaultValue={selectedStatus}>
        <option value="" disabled={true}> ---select---</option>
        {uniqueStatuses.map (status => <option key={status} value={status}>{status}</option>)}
    </select>
</div>)

}

export default StatusSelector;