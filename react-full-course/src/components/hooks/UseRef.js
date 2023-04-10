import { useEffect, useRef, useState } from "react";

const UseRef1 = () => {

    const [data, setData] = useState("")
    // const [times, setTimes] = useState(1)
    const times = useRef(1)
    const currentDom = useRef('') // we can use useRef to access the dom elements too

    useEffect(() => {
        // setTimes(prev => prev + 1) // it will becomes an infinite loop coz, when component render first it exe useEffect the it will change time then it will execute useEffect it will keep on going...
        times.current = times.current + 1
    })

    const focus = () => {
        currentDom.current.focus()
    }

    return (
        <>
            <h3>component rerendered: {times.current}</h3>
            <input ref={currentDom} type="text" onChange={e => setData(e.target.value)} value={data} placeholder="Enter your name"/>
            <h2>Message: {data}</h2>
            <button onClick={focus}>Send</button>
        </>
    )
}

export default UseRef1;