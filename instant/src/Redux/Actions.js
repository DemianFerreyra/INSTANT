import axios from "axios"
export const GETUSER = "GetUser";
export const GETFEED = "GetFeed";
export const GetFollowList = "GetFollows";
export const GetAllUsers = "GetAllUsers";
export const CreateUser = "CreateUser";



export const getUser = (id) => {
  console.log('get de usuario en proceso')
    return async function(dispatch){
      return fetch(`http://localhost:3001/profiles/${id}`)
      .then(res => res.json())
      .then(user => dispatch({type: GETUSER, payload: user}))
    }
}

export const GetFeed = (ids) => {
  let responses = []
  console.log('get de posts feed en proceso')
  return async function(dispatch){
      for (let index = 0; index < ids.length; index++) {
        const a = await fetch(`http://localhost:3001/profiles/${ids[index]}`)
        .then(res => res.json())
        for (let i = 0; i < a.posts.length; i++) {
          responses.push(a.posts[i]);
        }
      }
      console.log('posts', responses)
      dispatch({type: GETFEED, payload: responses})
  }   
}

export const GetFollows = (ids) => {
  let responses = []
  console.log('get de usuarios en proceso')
  return async function(dispatch){
      for (let index = 0; index < ids.length; index++) {
        const a = await fetch(`http://localhost:3001/profiles/${ids[index]}`)
        .then(res => res.json())
        responses.push(a);
      }
      console.log(responses)
      dispatch({type: GetFollowList, payload: responses})
  }   
}

export const createUser = (data) => {
    console.log('usuario en proceso')
    return{type: CreateUser, payload: data}
}