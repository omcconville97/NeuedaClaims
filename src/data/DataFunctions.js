import axios from "axios"

export const getAllClaimsAxios  = () => {
    return axios({url : "http://localhost:8080/api/claim",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getInsuranceType = ()  => {
    console.log("getinsurancetype")
    return axios({url : "http://localhost:8080/api/insurancetype",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForInsuranceType  = (insuranceType) => {
    return axios({url : "http://localhost:8080/api/claim?insuranceType="+insuranceType,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}

export const getAllClaimsForPolicyNumber  = (policyNumber) => {
    return axios({url : "http://localhost:8080/api/claim/policy?policyNumber="+policyNumber,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}


export const getAllOpenClaims  = (status) => {
    return axios({url : "http://localhost:8080/api/claim?status="+status,
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}



//add claim:  POST /newclaim
export const addNewClaim = (claim) => {
    return axios({url : "http://localhost:8080/api/claim",
                    method: "POST",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"},
                    data : claim
                })
}


