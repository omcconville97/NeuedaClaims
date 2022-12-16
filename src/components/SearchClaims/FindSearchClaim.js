import Search from "../Search";
import SearchClaim from "./SearchClaim";
import {useParams} from 'react-router-dom';
import { useEffect } from "react";

const FindSearchClaim = (props) => {

const params = useParams();

useEffect( ()=> {
    if (params.policyNumber != null && params.policyNumber !== props.searchTerm) {
        props.setSearchTerm(params.policyNumber);
    }
} , [params.policyNumber]);

return (
    <>
        <Search setSearchTerm={props.setSearchTerm} />
        <SearchClaim searchTerm={props.searchTerm}  />
    </>
    );
}

export default FindSearchClaim;