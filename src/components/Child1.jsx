import React from 'react'
import SubChild1 from './SubChild1'

const Child1 = (props) => {
  return (
    <><h2>Child1</h2>
    <SubChild1 subval={props.value}/></>
  )
}

export default Child1