const DisplayModal = ({ handleClose, details }) => {
    return (
  
      <div className="modalContainer">
              <h1 className="formTitle">More Info</h1>
              <p onClick={handleClose} className="closeBtn">X</p>
              <div className="flex-container">
                  <div className="flex-child">
                      <p>Policy Number: {details?.policyNumber}</p>
                      <p>Title: {details?.title}</p>
                      <p>First Name:{details?.firstName} </p>
                      <p>Surname: {details?.surname}</p>
                      <p>Date: {details?.date}</p>
                      <p>Status: {details?.status}</p>
                  </div>
                  <div className="flex-child">
                      <p>Email: {details?.email}</p>
                      <p>Phone No: {details?.phoneNo}</p>
                      <p>Insurance Type: {details?.insuranceType}</p>
                      <p>Worth: £{details?.estimatedWorth}</p>
                      <p>Description: {details?.description}</p>
                  </div>
              </div>
                <div className="modalBtn">
                    <button onClick={handleClose}>Close</button>
                </div>
        </div>
    );
  };

  export default DisplayModal;