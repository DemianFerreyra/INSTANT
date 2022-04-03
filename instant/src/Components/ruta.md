Estructura del usuario {}

{
  profilepic : image
  username : string
  bio : string
  id : int

  posts
  [
    post
    {
     image : image
     description : string
     likes : int
     comments
     [
      comment
      {
       user : id
       comment : string
      }  
     ]
    }
  ]
  follows
  [
    follow : id
  ]
  chats
  [
    chat
    {
     user : id
     messages
     {
      message : string
      user : id
     }
    }
  ]
}