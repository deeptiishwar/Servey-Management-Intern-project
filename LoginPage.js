
import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import jindalLogo from './logo/jindal_log.png';

const LoginPage = ({ onLogin }) => {
  const handleGoogleSuccess = (response) => {
    console.log('Google login success:', response);
    // Perform any necessary actions after successful login
    onLogin();
    // Redirect to landing page
    window.location.href = '/landing-page';
  };

  const handleGoogleFailure = (response) => {
    console.log('Google login failure:', response);
    // Handle login failure
  };

  const handleEmailSignUp = () => {
    // Implement your email sign-up logic here
    // Redirect to landing page after sign-up
    window.location.href = '/landing-page';
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div style={styles.pageContainer}>
        <header style={styles.header}>
          <img src={jindalLogo} alt="Jindal Power" style={styles.logo} />
        </header>
        <div style={styles.container}>
          <div style={styles.signupContainer}>
            <h2 style={styles.heading}>Create an account</h2>
            <p style={styles.text}>Enter your email to sign up for this app</p>
            <input type="email" placeholder="email@domain.com" style={styles.emailInput} />
            <button onClick={handleEmailSignUp} style={styles.signupButton}>Sign up with email</button>
            <div style={styles.divider}>
              <hr style={styles.line} />
              <span style={styles.dividerText}>or continue with</span>
              <hr style={styles.line} />
            </div>
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              useOneTap
              render={(renderProps) => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} style={styles.googleButton}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" style={styles.googleLogo} />
                  Google
                </button>
              )}
            />
            <p style={styles.terms}>
              By clicking continue, you agree to our <a href="/terms" style={styles.link}>Terms of Service</a> and <a href="/privacy" style={styles.link}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
  },
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
    backgroundColor: 'white',
    padding: '5px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    height: '50px',
    width: '10%',
    marginLeft: '3%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(to right, rgba(66, 125, 157, 0.52) 50%, #E6EFF5 50%)',
    width: '100%',
    flexGrow: 1,
  },
  signupContainer: {
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    width: '400px',
    marginTop: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '14px',
    color: '#333',
    marginBottom: '20px',
  },
  emailInput: {
    width: '93%',
    padding: '12px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '14px',
  },
  signupButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '14px',
    marginBottom: '20px',
  },
  divider: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  line: {
    flexGrow: 1,
    height: '1px',
    backgroundColor: '#ccc',
    border: 'none',
  },
  dividerText: {
    margin: '0 10px',
    color: '#333',
    fontSize: '12px',
  },
  googleButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    color: '#000',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  googleLogo: {
    width: '20px',
    height: '20px',
    marginRight: '10px',
  },
  terms: {
    marginTop: '20px',
    fontSize: '12px',
    color: '#666',
  },
  link: {
    color: '#000',
    textDecoration: 'none',
  },
};

export default LoginPage;
