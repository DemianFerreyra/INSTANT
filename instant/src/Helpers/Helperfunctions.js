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
    console.log('id de la pagina a seguir',id.id)
    console.log('follows de la pagina que sigue',selffollows)
    console.log('followers de la pagina a seguir',followers)


    let follower = selffollows; //aca van los follows de la cuenta que sigue + la cuenta a la que acaba de seguir
    const idd = parseInt(id.id);
    if(selffollows.length === 0){
        follower.push(idd)     
        axios.patch(`http://localhost:3001/profiles/${selfid}`, {follows: follower})
        .catch(error => {
          console.log(error);
        });
    }else{
      const repeated = follower.find(e => e === idd)

      if(repeated){
        let f = follower.filter(e => e !== repeated)
        axios.patch(`http://localhost:3001/profiles/${selfid}`, {follows: f})
        .catch(error => {
        console.log(error);
        });
      }else{
        follower.push(idd)     
        axios.patch(`http://localhost:3001/profiles/${selfid}`, {follows: follower})
        .catch(error => {
          console.log(error);
        });
      }
    }      
}

