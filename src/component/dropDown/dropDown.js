import React, { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
const DropDown = () => {
    const [selectedItem, setSelectedItem]=useState('')
    const [textField,setTextField]=useState('')
    const handleDropdownMenuChange =(event)=>{
        setSelectedItem(event.target.value)
    }
 
  return (
    <div className='container text-center'>
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1" checked={selectedItem === 'action-1'} onChange={handleDropdownMenuChange} >Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2" checked={selectedItem === 'action-2'} onChange={handleDropdownMenuChange}>Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3" checked={selectedItem === 'action-3'} onChange={handleDropdownMenuChange}>Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <input
        className="form-control "
        type="text"
        value={textField}
        onChange={(event) => setTextField(event.target.value)}/>
    </div>
  )
}

export default DropDown
