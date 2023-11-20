import React, { useState } from 'react'
import "./text.css"
const TextFeild = () => {
    const [inputData, setInputData] = useState(''); // Input field data
    const [orderList, setOrderList] = useState([]); // List of items
   //Implement an onChange handler for the input field to capture the user's input
    const handleInputChange = (event) => {
        setInputData(event.target.value);}; 
    //Create a function to add the input data to the order list
    const addOrderItem = () => {
        if (inputData !== '') {
            setOrderList([...orderList, { item: inputData }]);
            setInputData(''); // Clear input field after adding
        }
    };  
    //Implement a function to remove an item from the order list based on its index
    const handleDeleteItem = (index) => {
        const updatedOrderList = [...orderList];
        updatedOrderList.splice(index, 1);
        setOrderList(updatedOrderList);
    }; 

  return (
    <>
      <div className='container text-center content'>
            <input class="form-control" type="text" value={inputData} onChange={handleInputChange} />
            <button class="btn btn-success" onClick={addOrderItem}>Add Item</button>
            <ol class="list-group list-group-numbered">
                {orderList.map((item, index) => (
                    <li className='d-flex' class="list-group-item" key={index}>
                        {item.item}
                    
                        <button class="btn btn-danger " onClick={() => handleDeleteItem(index)}>Delete</button>
                    </li>
                ))}
            </ol>
        </div>
    </>
  )
}

export default TextFeild
