import React from "react";

const Button = ({children, handleClick}) => {
    console.log(children)
    return <button onClick={handleClick}>{children}</button>
}

// to overcome rerendering we are wrapping the export with React.memo
// still it will not solve the issue, it will still recreates the functions 
// but the components will not be rerendred.
export default React.memo(Button);