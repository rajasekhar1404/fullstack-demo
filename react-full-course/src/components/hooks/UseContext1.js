import { useContext } from "react";
import { UseContext } from "./context/UseContext";

const UseContext1 = () => {

    const data = useContext(UseContext);

    const {firstName, lastName, age} = data;

    return (
        <>
            <h2>Hello {firstName} {lastName}, you are {age} years old</h2>
        </>
    )
}

export default UseContext1;