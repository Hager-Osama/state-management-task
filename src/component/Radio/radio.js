import React, { useState } from 'react'
import "./radio.css"

const Radio = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [textFieldValue, setTextFieldValue] = useState('');

  const handleRadioButtonChange = (event) => {
    setSelectedOption(event.target.value);
    setTextFieldValue(event.target.value); // Update text field value based on selected option
  };

  return (

<div className='container text-center'>
<div className="form-check">
      <input
        type="radio"
        id="option1"
        name="radioOption"
        value="React.js"
        checked={selectedOption === 'React.js'}
        onChange={handleRadioButtonChange}
      />

      <label for="option1" >React.js</label>
      <input
        type="radio"
        id="option2"
        name="radioOption"
        value="vue.js"
        checked={selectedOption === 'vue.js'}
        onChange={handleRadioButtonChange}
      />

      <label for="option2">vue.js</label>
      <input
        type="radio"
        id="optionNone"
        name="radioOption"
        value="Angler.js"
        checked={selectedOption === "Angler.js"}
        onChange={handleRadioButtonChange}
      />
      <label for="optionNone">Angler.js</label>

      <input
        type="radio"
        id="optionNone"
        name="radioOption"
        value=""
        checked={selectedOption === " "}
        onChange={handleRadioButtonChange}
      />
      <label for="optionNone">None</label>
      
      <input
      class="form-control "
        type="text"
        value={textFieldValue}
        onChange={(event) => setTextFieldValue(event.target.value)}
      />
    </div>
</div>
 
  )
}

export default Radio
