const DisplayModal = ({ handleClose, details }) => {
    return (
  
      <div className="modalContainer">
              <h1 className="formTitle">More Info</h1>
              <p onClick={handleClose} className="closeBtn">X</p>
              <div className="flex-container">
                  <div className="flex-child">
                      <p><span>Policy Number:</span> {details?.policyNumber}</p>
                      <p><span>Title:</span> {details?.title}</p>
                      <p><span>Name:</span> {details?.firstName} {details?.surname} </p>
                      <p><span>Date:</span> {details?.date}</p>
                      <p><span>Status:</span> {details?.status}</p>
                  </div>
                  <div className="flex-child">
                      <p><span>Email:</span> {details?.email}</p>
                      <p><span>Phone No:</span> {details?.phoneNumber}</p>
                      <p><span>Insurance Type:</span> {details?.insuranceType}</p>
                      <p><span>Worth:</span> £{details?.estimatedWorth}</p>
                      <p><span>Description:</span> {details?.description}</p>
                  </div>
              </div>
                <div className="modalBtn">
                    <button onClick={handleClose}>Close</button>
                </div>
        </div>
    );
  };

  export default DisplayModal;