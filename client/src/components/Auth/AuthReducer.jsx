



export const AuthReducer = (state, action)=>{
   
        switch(action.type) {

            case "LOGIN_START":
                return {
                    user:null,
                    isFetching : true,
                    error : null
                }
            case "LOGIN_SUCCESS":
                return {
                    user: action.payLoad,
                    isFetching :false,
                    error : null
                }    
            case "LOGIN_FAILURE":

                return {
                    user: null,
                    isFetching : false,
                    error : action.payLoad
                }  
            default:
                return state ;  
        };
    } ;
