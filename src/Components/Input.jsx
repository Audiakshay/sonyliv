import React from 'react';

function Input(props) {
    const { placeholder } = props;
  return (
    <div className='inputContainer'>
        <label htmlFor="" style={{fontSize: 18, fontWeight: 'bold'}}>{placeholder}</label>
        <input {...props} className='inp' placeholder={placeholder} />
    </div>
  )
}

export default Input