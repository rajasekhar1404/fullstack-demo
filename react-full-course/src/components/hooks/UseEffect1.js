import { useEffect, useState } from "react";

const UseEffect1 = () => {

    const [data, setData] = useState(1)
    const [pageWidth, setPageWidth] = useState(window.innerWidth)

    useEffect(() => {console.log("executes everytime")})
    useEffect(() => {console.log("executes only once")}, [])
    useEffect(() => {console.log("executes when data is updated:", data)}, [data]);
    
    // to clean the events before executing new event
    useEffect(() => {
        
        const resizeEvent = () => {
            setPageWidth(window.innerWidth)
        }
        
        window.addEventListener('resize', resizeEvent)
        
        return () => {
            console.log("removing")
            window.removeEventListener('resize', resizeEvent)
        }

    })

    return (
        <>
            <h2>page width is {pageWidth}</h2>
            <h2>{data}</h2>
            <button onClick={() => setData(data + 1)}>+</button>
        </>
    )
}

export default UseEffect1;