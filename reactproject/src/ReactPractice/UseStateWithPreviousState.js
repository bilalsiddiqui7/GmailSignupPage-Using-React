import React,{useState} from 'react'

function UseStateWithPreviousState() {
    const initialState=0
    const [count, setcount] = useState(initialState)
    return (
        <div>
            Count-{count}
            <button onClick={() => setcount(initialState)}>Reset</button>
            <button onClick={() => setcount(prevState => prevState+1)}>Increment</button>
            <button onClick={() => setcount(prevState => prevState-1)}>Decrement</button>
        </div>
    )
}

export default UseStateWithPreviousState
