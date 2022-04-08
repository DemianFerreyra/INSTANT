import axios from "axios";


export function compare( a, b ) {
    if ( a.date < b.date ){
      return -1;
    }
    if ( a.date > b.date ){
      return 1;
    }
    return 0;
  }

export function Setfollow(selffollows, followers, selfid, id){ //arreglo de tus follows y de los followers de la cuenta actual y la id tuya y la de la cuenta actual ([tus follows],[followers de la cuenta], tu id, id de la cuenta)
    console.log('id de la pagina que sigue',selfid)
    console.log('id de la pagina a seguir',id)
    console.log('follows de la pagina que sigue',selffollows)
    console.log('followers de la pagina a seguir',followers)


    let follower = selffollows; //aca van los follows de la cuenta que sigue + la cuenta a la que acaba de seguir
    if(selffollows.length === 0){
        follower.push(id)     
        axios.patch(`http://localhost:3001/profiles/${selfid}`, {follows: follower})
        .catch(error => {
          console.log(error);
        });
    }else{
      const repeated = follower.find(e => e === id)

      if(repeated){
        let f = follower.filter(e => e !== repeated)
        axios.patch(`http://localhost:3001/profiles/${selfid}`, {follows: f})
        .catch(error => {
        console.log(error);
        });
      }else{
        follower.push(id)     
        axios.patch(`http://localhost:3001/profiles/${selfid}`, {follows: follower})
        .catch(error => {
          console.log(error);
        });
      }
    }      
}

export function CreatePost(img, desc, uploadername, uploaderpic, uploaderid, date){
  console.log('nuevo post')
  let post = {
    image: img,
    desc: desc,
    uploadername: uploadername,
    uploaderpic: uploaderpic,
    uploaderid: uploaderid,
    date: date
  }
  let posts = [];
  posts.push(post);
  axios.patch(`http://localhost:3001/profiles/0`, {posts: posts})
  .catch(error => {
    console.log(error);
  });
}

export function Getdate(){
  let today = new Date();
  let date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  console.log(date)
}