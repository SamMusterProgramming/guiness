import { createContext, useReducer } from "react"
import { AuthReducer } from "./AuthReducer.jsx"



export const INITIAL_STATE = {
    user : null,
    isFetching : true,
    error : false
}

export const AuthContent = createContext(INITIAL_STATE)

export const AuthContentProvider =({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE)
    return (
        <AuthContent.Provider 
        value ={{
        user:state.user, 
        isFetching:state.isFetching ,
        error:state.error,
        dispatch,
        }}>
            {children}
        </AuthContent.Provider>
       
    )
}