import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import TrackEmbed from './components/TrackEmbed';
import PlaylistSelector from './components/PlaylistSelector';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  const [token, setToken] = useState(null);
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  
  // Extract track ID from the URL
  let trackId = window.location.pathname.split("/track/")[1]?.split("?")[0] || "";

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
        // Store token in localStorage
        localStorage.setItem("spotifyToken", access_token);
        fetchPlaylists(access_token);
        
        // Retrieve track ID from localStorage and redirect
        const storedTrackId = localStorage.getItem("trackId");
        if (storedTrackId) {
            window.location.href = `http://localhost:3000/track/${storedTrackId}`;
        }
    } else if (trackId) {
        // Store track ID in localStorage before authentication
        localStorage.setItem("trackId", trackId);
    }
  }, [trackId]);

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

  const addTrackToPlaylist = async () => {
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
          <Route path="/track/:trackId" element={
            <>
              <TrackEmbed trackId={trackId} />
              {token && (
                <PlaylistSelector 
                  token={token} 
                  playlists={playlists} 
                  setSelectedPlaylist={setSelectedPlaylist} 
                  addTrackToPlaylist={addTrackToPlaylist} 
                />
              )}
            </>
          } />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );

}

export default App;
