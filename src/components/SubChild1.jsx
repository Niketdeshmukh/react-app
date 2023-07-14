import React from 'react'
import { useSelector } from 'react-redux'

const SubChild1 = () => {
    const data = useSelector((c)=>{
        console.log(c.show.value);
        return c.show.value;
    })
    
    return (
        <>
            <div>SubChild1 value={data}</div>
            <button>button</button>
        </>
    )
}

export default SubChild1