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

export const getStatusType = ()  => {
    console.log("getStatusType")
    return axios({url : "http://localhost:8080/api/status",
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


export const getAllClaimsForStatusType  = (status) => {
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

export const editExistingClaim = (claim, id) => {
    return axios({url : "http://localhost:8080/api/claim/"+id,
                    method: "PUT",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"},
                    data : claim
                })
}


//Task
export const getAllTasks  = () => {
    return axios({url : "http://localhost:8080/api/task",
            method: "GET", 
            headers: {"Accept" : "application/json"}
            })
}
export const addNewTask = (task) => {
    return axios({url : "http://localhost:8080/api/task",
                    method: "POST",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"},
                    data : task
                })
}
export const deleteTaskAxios = (id) => {
    return axios({url : "http://localhost:8080/api/task/"+id,
                    method: "DELETE",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"}
                })
}
