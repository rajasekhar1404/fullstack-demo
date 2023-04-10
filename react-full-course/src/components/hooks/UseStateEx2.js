import { useState } from "react"

const UseState2 = () => {

    const [user, setUser] = useState({
        fullName: "",
        age: 0,
        address: ""
    });

    const [skills, setSkills] = useState(["JAVA", "Spring boot", "Microservices", "MongoDB", "ReactJS"])

    function changeUser() {
        // setUser({fullName: "raja"})     this will only update the fullName field and the remaining values will be null
        setUser({...user, fullName:"Rajasekhar", age:23}) // it will first take the copy of the existing data then updates only the fields we want.
        setSkills([...skills, "Docker"]) // incase if it is an array.
    }

    const { fullName, age } = user;

    // to delete a value from the array
    const deleteSkill = (skill) => {
        const filtered = skills.filter(s => s !== skill)
        setSkills(filtered)
    }

    return (
        <>
            <h2>Hello {fullName}</h2>
            <h2>I am {age} years old</h2>
            <ul>
                {skills.map(skill => (<div key={skill}>
                        <li>{skill}</li>
                        <button onClick={() => deleteSkill(skill)}>Delete</button>
                    </div>))}
            </ul>
            <button onClick={changeUser}>change</button>
        </>
    )
}

export default UseState2;