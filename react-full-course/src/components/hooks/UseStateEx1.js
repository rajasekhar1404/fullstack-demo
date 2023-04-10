import { useState } from "react"

export const UseState = () => {
    const [count, setCount] = useState(0);

    const handleDecrese = () => {
        setCount(count - 1)
    }

    const handleIncrease = () => {
        // setCount(count + 1)
        // setCount(count + 1)          this will not update the count twice, instead it will take the existing count and updates it again.

        setCount(prevCount => prevCount + 1)
        // setCount(prevCount => prevCount + 1)  this will solve the above issue and we can update the count twice by calling it again.
    }



    return (
        <>
            <button onClick={handleDecrese}>-</button>
            <h1>{count}</h1>
            <button onClick={handleIncrease}>+</button>
        </>
    )
}