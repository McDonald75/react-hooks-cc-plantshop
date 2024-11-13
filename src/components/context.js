import { createContext, useState } from "react";

const Context = createContext()
function ContextProvider ({children}){
    const [values, setValues] = useState([])
    const [initValues, setInitValues] = useState([])
    return(
        <Context.Provider value={{values, setValues, initValues, setInitValues}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}