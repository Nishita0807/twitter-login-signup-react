import React from 'react';
import '../styles/signupform.css'; // Import CSS for styling
import TwitterIcon from '@mui/icons-material/Twitter';
const SignupForm = () => {
  // Function to generate dropdown options for Date of Birth
  const generateDateOptions = () => {
    const options = [];
    for (let i = 1; i <= 31; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  // Generate years for the dropdown (adjust as needed)
  const currentYear = new Date().getFullYear();
  const years = [];
  for (let i = currentYear; i >= currentYear - 100; i--) {
    years.push(<option key={i} value={i}>{i}</option>);
  }

  return (
    <div className="signup-container">
      <div className='top-image'> <TwitterIcon sx={{ fontSize: '58px', color: '#1da1f2' }} /></div>
      <div className="signup-content">
        <h2>Create an account</h2>
        <form>
          <div>
          
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div>
            
            <input type="tel" id="phone" placeholder="Phone Number" />
          </div>
          <div style={{color:"#1da1f2"}}>Use email</div>
          <div>
            <h5>Date of birth</h5>
            <div className='content'>
            Facilisi sem pulvinar velit nunc, gravida scelerisque amet nibh sit. Quis bibendum ante phasellus metus, magna lacinia sed augue. Odio enim nascetur leo mauris vel eget. Pretium id ullamcorper blandit viverra dignissim eget tellus. Nibh mi massa in molestie a sit. Elit congue.
            </div>
          <div className='fields' >
          
            {/* Dropdown for Date of Birth - Month (you can customize month options as needed) */}
            <div className="dob-field month">
          <select>
            <option value="">Month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <div className="dob-field date">
          <select>
            <option value="">Day</option>
            {generateDateOptions()}
          </select>
        </div>
            {/* Dropdown for Date of Birth - Year */}
            <div className="dob-field year">
          <select>
            <option value="">Year</option>
            {years}
          </select>
        </div>
          </div>
          </div>
          
         
          
          <button type="submit">Next</button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
