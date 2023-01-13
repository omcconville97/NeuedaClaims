import axios from "axios"

export const getAllClaims = () => {
    return [
        {id: 1, policyNumber: "CF101", title: "Mr", firstName: "John", surname: "Smith", email: "j.smith@gmail.com", phoneNo:"07785345869", insuranceType:"Home", date: "2017-01-31", estimatedWorth: 400, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "Accepted - Paid", taskDate: "", taskNote: "" },

        {id: 2, policyNumber: "CF102", title: "Mrs", firstName: "Jessica", surname: "Bloggs", email: "j.bloggs@gmail.com", phoneNo:"07854254632", insuranceType:"Home", date: "2017-01-22", estimatedWorth: 200, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "On Going", taskDate: "", taskNote: ""},

        {id: 3, policyNumber: "CF103", title: "Mr", firstName: "Brian", surname: "Jones", email: "b.jones@gmail.com", phoneNo:"0781542598", insuranceType:"Vehicle", date: "2017-07-15", estimatedWorth: 300, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "Accepted - Paid", taskDate: "", taskNote: ""},

        {id: 4, policyNumber: "CF104", title: "Mrs", firstName: "Jessica", surname: "McKendry", email: "j.bloggs@gmail.com", phoneNo:"07854254632",insuranceType:"Vehicle", date: "2017-05-14", estimatedWorth: 150, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "Accepted - Awaiting Payment", taskDate: "", taskNote: ""},

        {id: 5, policyNumber: "CF105", title: "Mr", firstName: "Fred", surname: "Bustard", email: "j.bloggs@gmail.com", phoneNo:"07854254632", insuranceType:"Home", date: "2018-01-31", estimatedWorth: 50, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "Accepted - Paid"},

        {id: 6, policyNumber: "CF106", title: "Mrs", firstName: "Emma", surname: "McConville", email: "j.bloggs@gmail.com", phoneNo:"07854254632", insuranceType:"Vehicle", date: "2012-10-21", estimatedWorth: 600, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "Value too high"},

        {id: 7, policyNumber: "CF107", title: "Ms", firstName: "Rebecca", surname: "Doran", email: "j.bloggs@gmail.com", phoneNo:"07854254632",insuranceType:"Pet", date: "2014-05-31", estimatedWorth: 150, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "On Going"},

        {id: 8, policyNumber: "CF108", title: "Mr", firstName: "Shane", surname: "McMahon", email: "j.bloggs@gmail.com", phoneNo:"07854254632", insuranceType:"Home", date: "2012-01-03", estimatedWorth: 350, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "Accepted - Paid"},

        {id: 9, policyNumber: "CF109", title: "Mr", firstName: "Conor", surname: "Beattie", email: "j.bloggs@gmail.com", phoneNo:"07854254632", insuranceType:"Pet", date: "2020-01-04", estimatedWorth: 500, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "Accepted - Paid"},

        {id: 10, policyNumber: "CF110", title: "Mrs", firstName: "Julia", surname: "Roan", email: "j.bloggs@gmail.com", phoneNo:"07854254632", insuranceType:"Pet", date: "2021-01-11", estimatedWorth: 450, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "Accepted - Awaiting Payment"},

        {id: 11, policyNumber: "CF111", title: "Mrs", firstName: "Jennifer", surname: "Brennan", email: "j.bloggs@gmail.com", phoneNo:"07854254632", insuranceType:"Pet", date: "2018-01-21", estimatedWorth: 75, vehicleMake:"", vehicleModel: "", vehicleYear: "", 
        propertyAddress: "", animalType:"", animalBreed:"", reason:"", description:"", status: "Rejected"},

    ]
}


//add claim:  POST /newclaim
//update            PUT /newclaim

export const addNewClaim = (claim) => {
    return axios({url : "http://localhost:3000/Claims",
                    method: "POST",
                    headers: {"Accept" : "application/json", "Content-Type": "application/json"},
                    data : claim
                })
}

