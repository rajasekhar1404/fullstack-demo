const Parent = () => {
    const data = {
        firstName: "raja",
        lastName: "sekahr",
        age: 23
    }
    return (
        <>
            <h2>Parent</h2>
            <Child data={data}/>
        </>
    )
}

const Child = ({data}) => {
    return (
        <>
            <h2>Child</h2>
            <SubChild data={data}/>
        </>
    )
}

const SubChild = ({data}) => {
    return (
        <>
            <h2>SubChild</h2>
            <h3>{data.firstName}</h3>
            <h3>{data.lastName}</h3>
            <h3>{data.age}</h3>
        </>
    )
}

export default Parent;