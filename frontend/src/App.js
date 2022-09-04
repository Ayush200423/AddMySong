import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios';

// components
import Home from './components/Home'

const getParamsAuth = (hash) => {
  const removeHashtag = hash.slice(1)
  const splitComponents = removeHashtag.split('&')
  const getToken = splitComponents.filter((elem) => elem.startsWith("access_token"))[0].split('=')[1]
  return getToken
}

const App = () => {
  const SPACE_DELIMITER = "%20";
  const SCOPES = ["playlist-modify-public", "user-read-recently-played"];
  const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);

  const [token, setToken] = useState("")

  useEffect(() => {
    if (window.location.hash) {
      let accessToken = getParamsAuth(window.location.hash)
      localStorage.clear()
      localStorage.setItem('accessToken', accessToken)
    }
  }, [])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Home client_id={process.env.REACT_APP_CLIENT_ID} redirect_uri={process.env.REACT_APP_REDIRECT_URI} scopes={SCOPES_URL_PARAM}/>} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;