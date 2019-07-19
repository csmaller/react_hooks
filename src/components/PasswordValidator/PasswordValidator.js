import React, { useState, useEffect } from 'react'

function PasswordValidator () {
    const [isValid,onPasswordChange] = useSmartPassword();
    return (
      <div className="Form">
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          onChange={e => onPasswordChange(e)}
        />
        {isValid ? <p>Your password is valid </p> : null}
      </div>
    );
  }

  export default PasswordValidator ;

  function useSmartPassword(){
    const [isValid, setValid] = useState(false);
  
    const onChange= e => {
      const newValue = e.target.value;
      let _isValid = false;
      if (newValue.length >= 8) _isValid = true;
      setValid(_isValid);
    };
  
    return [isValid, onChange]; 
  }