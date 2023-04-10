import { useState } from "react";

const UseState5 = () => {

    const [task, setTask] = useState("")
    const [todo, setTodo] = useState([])

    const addTask = (e, newTask) => {
        e.preventDefault()
        setTodo([...todo, newTask])
        setTask("")
    }

    const deleteHandle = (task) => {
        const filtered = todo.filter(t => t !== task)
        setTodo(filtered)
    }

    const editHandle = (t) => {
        deleteHandle(t)
        setTask(t)
    }

    return (
        <>
            <form onSubmit={e => addTask(e, task)}>
                <input 
                    type="text" 
                    placeholder="Enter todo" 
                    value={task} 
                    onChange={e => 
                    setTask(e.target.value)}
                />
                <button>Add task</button>
            </form>
            <hr />
            <ul>
                {
                    todo.length > 0 ? 
                    todo.map(eachObj => 
                    <li key={eachObj}>
                        <span>{eachObj}</span>
                        <button onClick={() => editHandle(eachObj)}>edit</button>
                        <button onClick={() => deleteHandle(eachObj)}>delete</button>
                    </li>) : 
                    "No data found"}
            </ul>
        </>
    )
}

export default UseState5;