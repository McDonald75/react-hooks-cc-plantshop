import { createContext, useState } from "react";

const Context = createContext()
function ContextProvider ({children}){
    const [values, setValues] = useState([])
    const [initValues, setInitValues] = useState([])
    const [refresh, setRefresh] = useState(false)
    return(
        <Context.Provider value={{values, setValues, initValues, setInitValues, refresh, setRefresh}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}