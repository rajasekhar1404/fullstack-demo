import { useEffect, useMemo, useState } from "react";

const UseMemo1 = () => {

    const [count, setCount] = useState(0)

    const user = useMemo(() => {
        return {}
    }, [])

    // even if the user value is not changing below useEffect will keep on executing whenever the component is rerendered.
    // coz all the objects will be recreated when a component is rendered.
    useEffect(() => {
        console.log("hello")
    }, [user])

    function print(number) {
        console.log("print")
        return number;
    }


    // use memo will use the caching, it should be used when slow performance issues are there.
    // use memo helps to not execute the function unless there is a change in the variable,
    // usually all the funtions will re execute when a component is reloaded.
    const printFunc = useMemo(() => {
        return print(1);
    }, []);

    return (
        <>
            <h2>Hello {count}</h2>
            <button onClick={() => setCount(count + 1)}>+</button>
        </>
    )
}

export default UseMemo1;