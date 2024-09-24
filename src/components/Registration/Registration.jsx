// Registration.js
import { useState, useEffect } from "react";
import '../Registration/Regration.css' 

const Registration = () => {
  const [step, setStep] = useState(1); // Always start with step 1

  const [tournamentFormat, setTournamentFormat] = useState("");
  const [fee, setFee] = useState(0);

  useEffect(() => {
    // Retrieve saved step from localStorage
    const savedStep = localStorage.getItem("step");
    if (savedStep) {
      setStep(Number(savedStep));
    }
  }, []);

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

  useEffect(() => {
    switch (tournamentFormat) {
      case "Test Match":
        setFee(5000);
        break;
      case "ODI":
        setFee(3000);
        break;
      case "T20 Match":
        setFee(2000);
        break;
      case "T10 Match":
        setFee(1000);
        break;
      case "Knockout Tournament":
        setFee(4000);
        break;
      default:
        setFee(0);
    }
  }, [tournamentFormat]);

  return (
    <div className="Registration">
      <header className="header">
         <h1 className="registration-title">Registration Form</h1>
      </header>

      <main className="form-container">
        {/* Conditional rendering based on the current step */}
        {step === 1 && (
          <>
            <h2 className="form-title">Personal Details</h2>
            <form
              className="registration-form"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission

                // Validate the form
                const form = e.target;
                if (form.checkValidity()) {
                  handleNext(e); // Proceed to the next step if valid
                } else {
                  form.reportValidity(); // Show validation messages if invalid
                }
              }}
            >
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Enter your address"
                  required
                />
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  required
                />
              </div>

              <div className="form-group">
                <label>Gender</label>
                <div className="gender-options">
                  <label>
                    <input type="radio" name="gender" value="male" required /> Male
                  </label>
                  <label>
                    <input type="radio" name="gender" value="female" required /> Female
                  </label>
                  <label>
                    <input type="radio" name="gender" value="other" required /> Other
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="user@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label>Cricket Role</label>
                <select required>
                  <option value="">Select the cricket role</option>
                  <option value="Batsman">Batsman</option>
                  <option value="Bowler">Bowler</option>
                  <option value="All-rounder">All-rounder</option>
                  <option value="Wicketkeeper">Wicketkeeper</option>
                </select>
              </div>

              {/* Button wrapper */}
              <div className="button-wrapper">
                <button type="submit" className="submit-btn">Next</button>
              </div>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            {/* Team Details Form */}
            <h2 className="form-title">Team Details</h2>
            <form
              className="team-details-form"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent form submission

                // Validate the form fields
                const form = e.target;

                if (form.checkValidity()) {
                  handleNext(e); // Proceed to the next step if the form is valid
                } else {
                  // Show built-in error messages
                  form.reportValidity();
                }
              }}
            >
              <div className="form-group">
                <label>Team Name</label>
                <input
                  type="text"
                  placeholder="Enter your team name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Number of Players</label>
                <input
                  type="number"
                  placeholder="Enter the number of players"
                  required
                  min="1" // You can set a minimum value if applicable
                />
              </div>

              <div className="form-group">
                <label>Team Captain</label>
                <input
                  type="text"
                  placeholder="Enter the captain's name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Coach Name</label>
                <input
                  type="text"
                  placeholder="Enter the coach's name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Team Location</label>
                <input
                  type="text"
                  placeholder="Enter the team's location/home ground"
                  required
                />
              </div>

              <div className="form-group">
                <label>Team Sponsor <span className="optional">(Optional)</span></label>
                <input type="text" placeholder="Enter the sponsor's name (if any)" />
              </div>

              {/* Buttons for navigation */}
              <div className="button-group">
                <button className="prev-btn" onClick={handlePrevious}>Previous</button>
                <button type="submit" className="submit-btn">Next</button>
              </div>
            </form>
          </>
        )}

        {step === 3 && (
          <>
            {/* Tournament Details Form */}
            <h2 className="form-title">Tournament Selection</h2>
            <form
              className="tournament-details-form"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent form submission

                // Validate the form fields
                const form = e.target;

                if (form.checkValidity()) {
                  handleNext(e); // Proceed to the next step if the form is valid
                } else {
                  // Show built-in error messages
                  form.reportValidity();
                }
              }}
            >
              <div className="form-group">
                <label>Tournament Format</label>
                <select
                  value={tournamentFormat}
                  onChange={(e) => setTournamentFormat(e.target.value)}
                  required
                >
                  <option value="">Select the tournament format</option>
                  <option>Test Match</option>
                  <option>ODI</option>
                  <option>T20 Match</option>
                  <option>T10 Match</option>
                  <option>Knockout Tournament</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tournament Experience Level</label>
                <select required>
                  <option value="">Select your team experience level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>

              <div className="form-group">
                <label>Preferred Location</label>
                <select required>
                  <option value="">Select the tournament location</option>
                  <option>Wankhede Stadium, Mumbai, Maharashtra</option>
                  <option>Eden Gardens, Kolkata, West Bengal</option>
                  <option>M. Chinnaswamy Stadium, Bangalore, Karnataka</option>
                  <option>M.A. Chidambaram Stadium, Chennai, Tamil Nadu</option>
                  <option>Arun Jaitley Stadium, Delhi</option>
                  <option>Narendra Modi Stadium, Ahmedabad, Gujarat</option>
                </select>
              </div>

              <div className="form-group">
                <label>Preferred Date Range</label>
                <div className="date-range">
                  <input type="date" placeholder="Start date" required />
                  <input type="date" placeholder="End date" required />
                </div>
              </div>

              <div className="form-group">
                <label>Special Request/Notes <span className="optional">(Optional)</span></label>
                <textarea placeholder="Enter any specific requests (e.g., preferred match times)" />
              </div>

              <div className="button-group">
                <button className="prev-btn" onClick={handlePrevious}>Previous</button>
                <button type="submit" className="submit-btn">Next</button>
              </div>
            </form>
          </>
        )}

        {step === 4 && (
          <>
            {/* Payment and Confirmation Page */}
            <h2 className="form-title">Payment and Confirmation</h2>
            <form
              className="payment-details-form"
              onSubmit={(e) => {
                e.preventDefault(); // Prevent form submission
                const form = e.target;

                // Check if all required fields are filled
                if (form.checkValidity()) {
                  handleNext(e); // Proceed to next step if valid
                } else {
                  // Show error messages if the form is invalid
                  form.reportValidity();
                }
              }}
            >
              <div className="form-group">
                <label>Registration Fees</label>
                <input type="text" value={`₹${fee}.00`} readOnly />
              </div>

              <div className="form-group">
                <label>Bank Name</label>
                <select required>
                  <option value="">Select your bank name</option>
                  <option value="HDFC">HDFC Bank</option>
                  <option value="SBI">State Bank of India</option>
                  <option value="ICICI">ICICI Bank</option>
                  <option value="Axis">Axis Bank</option>
                  <option value="Kotak">Kotak Mahindra Bank</option>
                </select>
              </div>

              <div className="form-group">
                <label>Card Number</label>
                <input type="text" placeholder="**** **** **** 1020" maxLength="16" required />
              </div>

              <div className="form-group">
                <label>Cardholder Name</label>
                <input type="text" placeholder="Enter the cardholder's name" required />
              </div>

              <div className="form-group">
                <label>Expire</label>
                <input type="text" placeholder="MM/YY" maxLength="5" required />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input type="password" placeholder="***" maxLength="3" required />
              </div>

              <div className="button-group">
                <button className="prev-btn" onClick={handlePrevious}>Previous</button>
                <button type="submit" className="submit-btn">Submit</button>
              </div>
            </form>
          </>
        )}

        {step === 5 && (
          <>
            {/* Confirmation Message */}
            <h2 className="form-title">Confirmation</h2>
            <div className="confirmation-message">
              <div className="svg-container">
                <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
                  {/* Animated Circle */}
                  <circle
                    fill="none"
                    stroke="#0a8547"
                    strokeWidth="20"
                    cx="200"
                    cy="200"
                    r="150"
                    className="circle"
                    strokeLinecap="round"
                    transform="rotate(-90 200 200)"
                  />
                  {/* Animated Tick */}
                  <polyline
                    fill="none"
                    stroke="#0a8547"
                    strokeWidth="24"
                    points="115,220 173,284 270,160"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tick"
                  />
                </svg>
              </div>

              <h2>Payment Success</h2>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Registration;
