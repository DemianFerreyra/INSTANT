import axios from "axios"
export const GetUser = "GetUser";
export const GetFollowList = "GetFollows";
export const GetAllUsers = "GetAllUsers";
export const CreateUser = "CreateUser";


export const getUser = (id) => {
  console.log('get de usuario en proceso')
    return async function(dispatch){
      return fetch(`http://localhost:3001/profiles/${id}`)
      .then(res => res.json())
      .then(user => dispatch({type: GetUser, payload: user}))
    }
}

export const GetFollows = (ids) => {
  let responses = []
  console.log('get de usuarios en proceso')
  return async function(dispatch){
      console.log(ids)
      for (let index = 0; index < ids.length; index++) {
        const a = await fetch(`http://localhost:3001/profiles/${ids[index]}`)
        .then(res => res.json())
        responses.push(a);
      }
      console.log('respuestas', responses)
      dispatch({type: GetFollowList, payload: responses})
  }   
}

export const createUser = (data) => {
    console.log('usuario en proceso')
    console.log(data)
    return{type: CreateUser, payload: data}
}