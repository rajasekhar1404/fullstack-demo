import React from "react";

const Head = ({children, val}) => {
    // props will have a propery called children which will take the inner value of that tag or component
    console.log(children)
    return <div>{children} {val}</div>
}

// to overcome rerendering we are wrapping the export with React.memo
// still it will not solve the issue, it will still recreates the functions 
// but the components will not be rerendred.
export default React.memo(Head);