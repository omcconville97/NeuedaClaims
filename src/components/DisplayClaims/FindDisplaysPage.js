import Search from "../Search";
import DisplayClaim from "./DisplayClaim";
import {useParams} from 'react-router-dom';
import { useEffect } from "react";

const FindDisplaysPage = (props) => {

const params = useParams();

useEffect( ()=> {
    if (params.policyNumber != null && params.policyNumber !== props.searchTerm) {
        props.setSearchTerm(params.policyNumber);
    }
} , [params]);

return (
    <>
        <Search setSearchTerm={props.setSearchTerm} />
        <DisplayClaim searchTerm={props.searchTerm}  />
    </>
    );
}

export default FindDisplaysPage;