export const GetUser = "GetUser";
export const GetAllUsers = "GetAllUsers";
export const CreateUser = "CreateUser";


export const getUser = (id) => {
  console.log('get de usuario en proceso')
    return async function(dispatch){
      return fetch(`http://localhost:3001/profile/${id}`)
      .then(res => res.json())
      .then(user => dispatch({type: GetUser, payload: user}))
    }
}
export const createUser = (data) => {
    console.log('usuario en proceso')
    console.log(data)
    return{type: CreateUser, payload: data}
}