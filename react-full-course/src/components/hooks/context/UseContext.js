import React from "react";

const data = {
    firstName: "Rajasekhar",
    lastName: "Karampudi",
    age: 23
}

export const UseContext = React.createContext();

export const UseContextProvider = ({children}) => {
    return <UseContext.Provider value={data}>{children}</UseContext.Provider>
}