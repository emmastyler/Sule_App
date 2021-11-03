import {useEffect} from 'react'
import './App.css';
import Login from './login/Login';
import Player from './player/Player'
import SpotifyWebApi from 'spotify-web-api-js'
import { getTokenFromUrl } from './spotify/spotify';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  
  const [{user, token}, dispatch] = useDataLayerValue();

  useEffect(() => {
   const hash = getTokenFromUrl()
   window.location.hash = ""
   const _token = hash.access_token

   if(_token){
     dispatch({
       type: 'SET_TOKEN',
       token: _token
     })
    
     spotify.setAccessToken(_token)

    
     spotify.getMe().then((user) => {
       dispatch({
       type:'SET_USER',
       user: user
     })
     })
   }
   console.log("i have a token", token)
  }, [token, dispatch]);

  console.log("user is:", user)
  return (
    //BEM convention needs us to make the name of our class begin with small letters...
    <div className="app">
    {
      token ? (
          <Player spotify={spotify}/>
      ) : (
         <Login />
      )
    }
    
    </div>
  );
}

export default App;
