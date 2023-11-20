import React from 'react'
import {increase,decrease} from './counterSlice.js'
import {useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';

const CounterDesign = () => {
    const dispatch=useDispatch(); 
    const count=useSelector(state=>{
        return state.counter.count;
    })
    
  return (
    <div className='container text-center'>
        <h1>{count}</h1>
      <Button variant="primary" onClick={()=>dispatch(increase())}>+</Button>{' '}
      <Button variant="primary"onClick={()=>dispatch(decrease())}>-</Button>
      <h5> by redux  للاسف :/ </h5>
    </div>
  )
}

export default CounterDesign
