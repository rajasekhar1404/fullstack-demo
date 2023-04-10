import React from "react";

const Tail = ({children, num}) => {
    console.log(children)
    return <div>{children} {num}</div>
}

// to overcome rerendering we are wrapping the export with React.memo
// still it will not solve the issue, it will still recreates the functions 
// but the components will not be rerendred.
export default React.memo(Tail);