import React from 'react';
import '../styles/loginpage.css'; // Import CSS for styling
import TwitterIcon from '@mui/icons-material/Twitter';
const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
      <TwitterIcon sx={{ fontSize: '58px', color: '#1da1f2' }} />
        <h2>Log in to Twitter</h2>
        
        <div className="input-group">
          <input type="tel" placeholder="Phone Number, email address" />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" />
        </div>
        <div className="input-group">
          <button type="submit" style={{fontWeight:"bold"}}>Log In</button>
        </div>
        <div className="forgot-signup">
          <a href="/forgot-password">Forgot password?</a>
          <a href="/signup">Sign up to Twitter</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
