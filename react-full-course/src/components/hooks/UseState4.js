import { useState } from "react";

const UseState4 = () => {

    const initialState = {
        name: "",
        email: "",
        password: "",
    }

    const [user, setUser] = useState(initialState)

    // function handleEmail(e) {
    //     setUser({...user, email: e.target.value})
    // }

    // function handleName(e) {
    //     setUser({...user, name: e.target.value})
    // }

    // function handlePassword(e) {
    //     setUser({...user, password: e.target.value})
    // }

    function handleChange(e) {
        setUser({...user, [e.target.name]:e.target.value})
    }

    return (
        <>
            <form onSubmit={e => {e.preventDefault();console.log(user)}}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange}/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                <button type="submit">Upload</button>
            </form>
        </>
    )
}

export default UseState4;