import React, {useState} from 'react'
function UseState() {
    //Destructuring
    const[count,changeCount]=useState(0)
    return (
        <div>
            <button onClick={() => changeCount(count+1)}>Click-{count}</button>
        </div>
    )
}
