import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Track from './components/Track';

function App() {
  const [token, setToken] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("spotifyToken");
    if (storedToken) {
        setToken(storedToken);
        fetchPlaylists(storedToken);
    }

    // Check for access token in URL hash
    if (window.location.hash) {
        const { access_token } = queryString.parse(window.location.hash);
        setToken(access_token);
        localStorage.setItem("spotifyToken", access_token);
        fetchPlaylists(access_token);
    }
  }, []);

  const fetchPlaylists = async (accessToken) => {
    try {
      const response = await axios.get("https://api.spotify.com/v1/me/playlists", {
        headers: { Authorization: "Bearer " + accessToken },
      });
      setPlaylists(response.data.items);
    } catch (error) {
      console.error("Error fetching playlists:", error);
    }
  };

  const addTrackToPlaylist = async (trackId) => {
    if (!selectedPlaylist) return;
    try {
      await axios.post(
        `https://api.spotify.com/v1/playlists/${selectedPlaylist}/tracks`,
        {
          uris: [`spotify:track:${trackId}`],
        },
        {
          headers: { Authorization: "Bearer " + token },
        }
      );
      alert("Track added!");
    } catch (error) {
      console.error("Error adding track:", error.response.data);
    }
  };

  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-between p-5">
        <Navigation isLoggedIn={token} setToken={setToken} />
  
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track/:trackId" element={<Track 
              token={token} 
              playlists={playlists}
              setSelectedPlaylist={setSelectedPlaylist}
              addTrackToPlaylist={addTrackToPlaylist}
            />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
