import React from 'react';

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=455809f1f15a42a38d2635c3dcfc81ea&response_type=token&redirect_uri=http://localhost:3000/&scope=playlist-modify-private%20playlist-modify-public";

  function Auth({ isLoggedIn, setToken }) {
    const handleLogout = () => {
        setToken(null);
        localStorage.removeItem("spotifyToken");
        
        // Get the track ID from localStorage
        const storedTrackId = localStorage.getItem("trackId");
      
        // Redirect to the track page with the track ID
        if (storedTrackId) {
          window.location.href = `http://localhost:3000/track/${storedTrackId}`;
        } else {
          // If there's no stored track ID, you can redirect to the homepage or any other page as needed
          window.location.href = "http://localhost:3000/";
        }
      };
      

  return (
    <>
      {!isLoggedIn ? (
        <a href={AUTH_URL} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full mx-2 mb-2 md:mb-0">Login with Spotify</a>
      ) : (
        <button onClick={handleLogout} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full mx-2">Logout of Spotify</button>
      )}
    </>
  );
}

export default Auth;
