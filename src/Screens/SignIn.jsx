import React from "react";
import "../CssFolder/SignIn.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase.config";
import { toast } from "react-hot-toast";

function SignIn() {
  auth.settings.appVerificationDisabledForTesting = true;
  const onCapture = () => {
    if(!window.recaptchaVerfier){
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          
        },
        'expired-callback': () => {
         
        }
      }, auth);
    }
  };

  const onSignup = () => {
    onCapture();
    const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, '+111222444', appVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      toast.success('OTP sended successfully');
    }).catch((error) => {
     console.log(error);
    });
  }
  return (
    <div className="container2">
        <div className="header">
            <p>&lt;</p>
            <p>Sign in with Mobile</p>
        </div>
      <h4 style={{color: '#FFFFFF', fontSize: '12px'}}>Enter your Mobile Number</h4>
      <div className="country_container">
        <p className="country_code">+91-</p>
        <input className="input_tag" />
      </div>
      <div className="button_continue">
        <button onClick={onSignup} className="btn">Continue</button>
        <p>
            By proceeding you confirm that you are of 18 years or above and accept the <b>Terms of Use & Privacy Policy</b>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
