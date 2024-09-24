import { useState, useEffect } from "react";
import '../Tournament/Turnaments.css' 

const Tournament = () => {
  const [step, setStep] = useState(1); // Step 1 is the default starting point
  const [formData, setFormData] = useState({
    tournamentName: "",
    organizerName: "",
    email: "",
    phone: "",
    date: "",
    venue: "",
    teams: 2,
    maxPlayers: 11,
    format: "20 overs",
    ageCategory: "Open",
    fundraising: false,
    additionalInfo: "",
    paymentMethod: "",
    cardDetails: {
      cardName: "",
      cardNumber: "",
      expiration: "",
      cvv: "",
    },
    billingAddress: {
      street: "",
      city: "",
      state: "",
      postalCode: "",
    },
  });


  useEffect(() => {
    localStorage.setItem("step", step);
  }, [step]);

  const handleNext = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    setStep((prevStep) => prevStep - 1);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      cardDetails: {
        ...prevData.cardDetails,
        [name]: value,
      },
    }));
  };

  

  return (
    <div className="Tournament">
          <div className="tournament-form-container">
      {step === 1 && (
        <>
          <h2 className="form-title">Organize Your Cricket Tournament</h2>
          <form
            className="tournament-form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target;
              if (form.checkValidity()) {
                handleNext(e);
              } else {
                form.reportValidity();
              }
            }}
          >
            <div className="form-group">
              <label>Tournament Name</label>
              <input
                type="text"
                name="tournamentName"
                value={formData.tournamentName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Organizer Name</label>
              <input
                type="text"
                name="organizerName"
                value={formData.organizerName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Contact Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Contact Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Tournament Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Tournament Venue</label>
              <input
                type="text"
                name="venue"
                value={formData.venue}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Number of Teams</label>
              <select
                name="teams"
                value={formData.teams}
                onChange={handleInputChange}
              >
                {[...Array(19).keys()].map((i) => (
                  <option key={i} value={i + 2}>
                    {i + 2}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Max Players per Team</label>
              <select
                name="maxPlayers"
                value={formData.maxPlayers}
                onChange={handleInputChange}
              >
                {[...Array(7).keys()].map((i) => (
                  <option key={i} value={i + 5}>
                    {i + 5}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Next
            </button>
          </form>
        </>
      )}

      {step === 2 && (
        <>
          <h2 className="form-title">Tournament Payment</h2>
          <p>Total Cost: ₹{formData.teams * 500}</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleNext(e);
            }}
          >
            <div className="form-group">
              <label>Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleInputChange}
              >
                <option>Credit Card</option>
                <option>Debit Card</option>
                <option>PayPal</option>
              </select>
            </div>
            <div className="form-group">
              <label>Cardholder Name</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardDetails.cardName}
                onChange={handleCardInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardDetails.cardNumber}
                onChange={handleCardInputChange}
                required
              />
            </div>
            < div className="button-group">
                <button className="prev-btn" onClick={handlePrevious}>Previous</button>
                <button type="submit" className="submit-btn">Next</button>
              
            </div>

            
          </form>
        </>
      )}

      {step === 3 && (
        <div className="confirmation-page">
          <h2>Registration Confirmed</h2>
          <p>
            Thank you for organizing your tournament. A confirmation email has
            been sent to {formData.email}.
          </p>

          <button>Return to Home</button>
        </div>
      )}
    </div>
    </div>

  );
};

export default Tournament;
