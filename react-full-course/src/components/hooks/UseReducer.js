import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === "UPDATE") {
        return {
            ...state,
            age: action.payload
        }
    } else if (action.type === "DECREASE") {
        return {
            ...state,
            age: action.payload
        }
    }

    return state;
}

const UseReducer = () => {

    const initialState = {
        firstName: "rajasekhar",
        lastName: "karampudi",
        age: 23
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const {firstName, lastName, age} = state;

    function handleUpdate() {
        dispatch({
            type: "UPDATE",
            payload: age + 1
        })
    }

    function handleDecrease() {
        dispatch({
            type: "DECREASE",
            payload: age - 1
        })
    }

    return (

        <>
            <h2>hello {firstName} {lastName}, happy {age} birthday.</h2>
            <button onClick={handleUpdate}>+</button>
            <button onClick={handleDecrease}>-</button>
        </>
    )
}

export default UseReducer;