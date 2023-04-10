import { useState } from "react";

const UseState3 = () => {

    const [view, setView] = useState(true)

    return (
        <>
            {view ? <h1>Hello</h1> : <h2>Data not available</h2>}
            <button onClick={() => setView(!view)}>{view ? "hide" : "show"}</button>
        </>
    )
}

export default UseState3;