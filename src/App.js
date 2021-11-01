import {useEffect, useState} from 'react'
import './App.css';
import Login from './login/Login'
import { getTokenFromUrl } from './spotify/spotify';

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
   const hash = getTokenFromUrl()
   window.location.hash = ""
   const _token = hash.access_token

   if(_token){
     setToken(_token)
   }
   console.log("i have a token", token)
  }, [token]);

  return (
    //BEM convention needs us to make the name of our class begin with small letters...
    <div className="app">
    {
      token ? (
          <h1>I am logged in</h1>
      ) : (
         <Login />
      )
    }
    
    </div>
  );
}

export default App;
