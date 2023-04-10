import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
    if (action.type === "CREATE") {
        return {
            ...state,
            data: action.payload
        }
    } else if (action.type === "DELETE") {
        const filtered = state.data.filter(user => user.id !== action.payload)
        
        return {
            ...state,
            data: filtered
        }
    } else if (action.type === "UPDATE") {
        
        const updated = state.data.map(user => {
            if (user.id === action.payload.id) {
                return {
                    id: user.id,
                    name: action.payload.name
                }
            } else {
                return user
            }
        })

        return {
            ...state,
            data: updated
        }
    }
    return state
}

const UseReducer2 = () => {

    useEffect(() => {
        getUsers()
    }, [])

    const initialUser = {
        id: 0,
        name: ""
    } 

    const [updateUser, setUpdateUser] = useState(initialUser)

    const initialState = {
        data: []
    }
    
    const getUsers = async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        dispatchUsers(data)
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const { data } = state

    const dispatchUsers = (d) => {
        dispatch({
            type: "CREATE",
            payload: d
        })
    }

    const dispatchDelete = (id) => {
        dispatch({
            type: "DELETE",
            payload: id
        })
    }

    const dispatchUpdate = (e) => {
        e.preventDefault();
        dispatch({
            type: "UPDATE",
            payload: updateUser
        })
        setUpdateUser(initialUser)
    }


    return (
        <>
            <form onSubmit={dispatchUpdate}>
                <input type="text" value={updateUser.name} onChange={e => setUpdateUser({...updateUser, name: e.target.value})} placeholder="Edit user"/>
                <button type="submit">Update</button>
            </form>
            {data.map(user =><div key={user.id}> 
                <h2>{user.name}</h2>
                <button onClick={() => setUpdateUser({id: user.id, name: user.name})}>edit</button>
                <button onClick={() => dispatchDelete(user.id)}>delete</button>
            </div>)}
        </>
    )
}

export default UseReducer2;