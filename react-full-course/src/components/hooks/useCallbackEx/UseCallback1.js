import { useCallback, useState } from "react"
import Head from "./Head"
import Tail from "./Tail"
import Button from "./Button"


const UseContext1 = () => {

    const [count, setCount] = useState(0)
    const [val, setVal] = useState(0)
    

    // now below both functions will not create when the component rerenders, it will only creates if the state was changed.
    const handleClick = useCallback(() => {
        setCount(count + 1)
    }, [count])

    const handleVal = useCallback(() => {
        setVal(val + 1)
    }, [val])

    // even if i click on a Button component it will render all the other components, it will give unnessasary component rendering issue
    // to overcome this issue we have React.memo
    return (
        <>
            <Head val={val}>Head</Head>
            <Tail num={count}>Tail</Tail>
            <h2>Use callback</h2>
            <Button handleClick={handleVal}>change</Button>
            <Button handleClick={handleClick}>Update</Button>
        </>
    )
}

export default UseContext1;