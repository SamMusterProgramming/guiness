



// export const authUser = async (userCredentiel , dispatch) => {
//     dispatch({type: "LOGIN_START"})
//     try {
//       await fetch('http://localhost:8000/users/login' ,{
//         method: 'POST', 
//         headers:{'Content-type':'application/json'},
//         body: JSON.stringify(userCredentiel) 
//       }).then(response => 
//         response.json() 
//         ).then( data => {
//           console.log(data)
//        if (data !== "wrong password" && data !== "user not found")   
//        dispatch({type: "LOGIN_SUCCESS", payLoad : data }); else  dispatch ({type:"LOGIN_FAILURE", payLoad : data }) 
//       }) 
//      }
//      catch(error)     
//      {
//       console.log(error)
//      }       


   
//    }

   export const authUser = async (userCredentiel, dispatch) => {
    dispatch({type: "LOGIN_START"})
    try {
      await fetch('http://localhost:8000/users/login' ,{
        method: 'POST', 
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(userCredentiel) 
      }).then (  response => response.json() )
      .then( data => {
       if(data != "user not found" && data != "password not found")
       dispatch({type: "LOGIN_SUCCESS", payLoad : data })
      else  dispatch ({type:"LOGIN_FAILURE", payLoad : data }) 
      })
   } catch (error) {
      console.log(error)
   }
  }


  export const register = async (user , dispatch) =>  {
    dispatch({type: "LOGIN_START"})
    console.log(user)
    try {
      await fetch('http://localhost:8000/users/register' ,{
        method: 'POST', 
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(user) 
      }).then ( response => response.json() )
      .then( data => { console.log(data)
       if(data != "email exist already" && data != "username taken")
       dispatch({type: "LOGIN_SUCCESS", payLoad : data })
      else  dispatch ({type:"LOGIN_FAILURE", payLoad : data }) 
      })
       
   } catch (error) {
      console.log(error)
   }
  }