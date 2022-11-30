const NewClaim = () => {

    return ( 
        <div className="container">
            <form>
                    <h2 className="formTitle">Register New Claim</h2>

                    <label htmlfor="policyNumber">Policy Number</label>
                    <input type="text" name="policyNumber" id="policyNumber" placeholder="Policy No." />

                    <label htmlfor="claimType">Claim Type:</label>
                    <select name="claimType" id="claimType">
                        <option value="" disabled selected>-- select --</option>
                        <option value="car">Car</option>
                        <option value="life">Life</option>
                        <option value="home">Home</option>
                        <option value="pet">Pet</option>
                    </select>

                    <label htmlfor="title">Title</label>
                    <select name="title" id="title">
                        <option value="" disabled selected>-- select --</option>
                        <option value="mr">Mr</option>
                        <option value="mrs">Mrs</option>
                        <option value="ms">Ms</option>
                    </select>

                    <label htmlfor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" placeholder="First Name" />

                    <label htmlfor="surname">Surname</label>
                    <input type="text" name="surname" id="surname" placeholder="Surname" />

                    <label htmlfor="email">Email</label>
                    <input type="text" name="email" id="email" placeholder="Email Address" />
                    
                    <label htmlfor="phoneNumber">Phone Number</label>
                    <input type="text" name="phoneNumber" id="phoneNumber" placeholder="Phone No." />

                    <button type="button" name="registerButton">Register</button>
   
            </form>
        </div>
    )
}

export default NewClaim;