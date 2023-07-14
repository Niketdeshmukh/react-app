import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../features/showSlice';

const SubChild1 = () => {
    const dispatch = useDispatch();

    const data = useSelector((c)=>{
        console.log(c.show.value);
        return c.show.value;
    })
    
    return (
        <>
            <div>SubChild1 value={data}</div>
            <button onClick={()=>dispatch(increment())}>button</button>
        </>
    )
}

export default SubChild1