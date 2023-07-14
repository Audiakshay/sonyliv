import React, { useState } from "react";
import "../CssFolder/SignIn.css";
import OtpInput from "react-otp-input";

function Otp() {
  const [otp, setOtp] = useState("");
  return (
    <div className="container1">
      <div className="header">
        <p>&lt;</p>
        <p>Verify by OTP</p>
      </div>
      <h4 style={{ color: "#FFFFFF", fontSize: "12px", textAlign: 'center', margin: '40px 0' }}>
        Enter your Mobile Number
      </h4>
      <div
        className="country_container"
        style={{ borderBottom: "none", textAlign: "center" }}
      >
        <OtpInput
          className="otpInput"
          value={otp}
          onChange={setOtp}
          otpType="number"
          disabled={false}
          containerStyle={{paddingLeft: '70px'}}
          inputStyle={{height: '30px', width: '30px', backgroundColor: '#2C2929', outline: 'none', border: 'none', borderBottom: '1px solid #FFFFFF', color: '#FFFFFF', fontSize: '24px'}}
          numInputs={4}
          renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
          renderInput={(props) => <input {...props} />}
        />
      </div>
      <div className="button_continue">
        <button className="btn">Continue</button>
      </div>
    </div>
  );
}

export default Otp;
