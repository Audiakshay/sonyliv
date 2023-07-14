import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import ReCAPTCHA from "react-google-recaptcha";
import "../Components/ComponentStyles/Admin.css";
import { Form, Formik } from "formik";
import axiosInstance from "../utils/Axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const nav = useNavigate();
  const [credential, setCredential] = useState({});
  const admin = async () => {
    const res = await axiosInstance.get('/Admin-Login');
    const data = await res.data;
    setCredential(data)
}

console.log(credential);

useEffect(() => {
  admin();
}, []);
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="adminMainContainer">
      <h1>SONY LIV ADMIN</h1>
      <div className="adminSubContainer">
        <h3>Sign In to Start Your Session</h3>
       <Formik
       initialValues={{
        userId: '',
        password: '',
       }}
       onSubmit={val => {
        // console.log(val)
        (val.userId === credential.userId && val.password === credential.password) ? nav('adminDashboard', {
          replace: true
        }) : alert('Credential mismatch'); 
       }}
       validate={(values) => {
        const errors = {};
        if(!values.userId){
          errors.userId = '....required'
        } 
        
        if(!values.password){
          errors.password = '....required'
        } 
        
        return errors;
       }}
       >
        {({values, handleChange, handleSubmit, errors}) => (
           <Form onSubmit={handleSubmit}>
           <Input type="text" placeholder="User Name" name="userId" value={values.userId} onChange={handleChange} />
           {errors.userId && <p style={{color: 'red', fontWeight: 'bolder', fontSize: '18px', width: '89%'}}>{errors.userId}</p>}
           <Input type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange} />
           {errors.password && <p style={{color: 'red', fontWeight: 'bolder', fontSize: '18px', width: '89%',}}>{errors.password}</p>}
           <ReCAPTCHA
             sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
             onChange={onChange}
           />
           <button type="submit">SignIn</button>
         </Form>
        )}
       </Formik>
      </div>
    </div>
  );
}

export default AdminLogin;
