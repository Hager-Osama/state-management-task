import React, { useState } from 'react';

const CheckBoxComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]); // Store selected checkbox values as an array
  const [textFieldValue, setTextFieldValue] = useState(''); // Store the text field value

  const handleCheckBoxChange = (event) => {
  let updatedSelectedOptions = [...selectedOptions]; // Create a copy of the selected options array

    if (event.target.checked) { // If the checkbox is checked
      updatedSelectedOptions.push(event.target.value); // Add the checkbox value to the array
    }
   /* if (!event.target.checked) { // If the checkbox is unchecked
      updatedSelectedOptions=updatedSelectedOptions.filter((option) => option !== event.target.value); // Remove the checkbox value using filter()
    }*/

    setSelectedOptions(updatedSelectedOptions); // Update the selected options state

    // Update the text field value with the selected options
    let newTextFieldValue = updatedSelectedOptions.join(', '); // Combine selected options using join()
    setTextFieldValue(newTextFieldValue);}
  return (
    <div className='container text-center'>
      <input class="form-control" type="text" value={textFieldValue} onChange={(event) => setTextFieldValue(event.target.value)} />
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" checked={selectedOptions.includes('option1')} onChange={handleCheckBoxChange} />
        <label class="form-check-label" for="inlineCheckbox1">Option 1</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" checked={selectedOptions.includes('option2')} onChange={handleCheckBoxChange} />
        <label class="form-check-label" for="inlineCheckbox2">Option 2</label>
      </div>
      <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" checked={selectedOptions.includes('option3')} onChange={handleCheckBoxChange} />
        <label class="form-check-label" for="inlineCheckbox3">Option 3</label>
      </div>
    </div>
  );
};

export default CheckBoxComponent;
