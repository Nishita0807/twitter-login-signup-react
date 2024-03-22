import React from 'react';
import '../styles/signuppage.css'; // Import CSS for styling
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from "../assets/google.png";
import { Link } from 'react-router-dom';
const SignupPage = () => {
  return (
    <div className="signup-container">
        
    <div className='main'>
    <div className='twitter-image'></div>
      <div className="signup-content">
      <TwitterIcon sx={{ fontSize: '58px', color: '#1da1f2',marginTop:"30px" }} />

        <h1>Happening now</h1>
        <h2>Join Twitter today</h2>
        <button className='wrapper'><div style={{
            width: "30px",
            height: "30px",
            backgroundImage: `url(${GoogleIcon})` , // Replace 'path_to_your_image' with the actual path to your image
            backgroundSize: 'cover',
            // Adjust margin as needed
          }}></div>
          <div>Sign Up with Google</div></button>
        <button className='wrapper'><div><AppleIcon sx={{fontSize:"40px",color:"black"}}/></div><div>Sign Up with Apple</div></button>
       <button > <Link to="/signup/email-phone" style={{color:" black "}}>Sign Up with phone or email</Link></button>
        <div className='policy'>By signing up you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use.</span> </div>
        <p>Already have an account? <Link to="/">Log in</Link></p>
      </div>
      
    </div>
    <div className='footer'>
        <div>About</div>
        <div>Help Center</div>
        <div>Terms of Service</div>
        <div>Privacy Policy</div>
        <div>Cookie Policy</div>
        <div>Ads info</div>
        <div>Blog</div>
        <div>Status</div>
        <div>Carrres</div>
        <div>Brand Resources</div>
        <div>Advertsing</div>
        <div>Marketing</div>
        <div>Twitter for Business</div>
        <div>Developers</div>
        <div>Directory</div>
        <div>Settings</div>
        <div>© 2021 Twitter, Inc.</div>
      </div>
    </div>
   
  );
}

export default SignupPage;
