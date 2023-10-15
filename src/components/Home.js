import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [spotifyUrl, setSpotifyUrl] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setSpotifyUrl(e.target.value);
  };

  const handleSubmit = () => {
    // Extract the track ID from the Spotify URL
    const trackId = extractTrackIdFromUrl(spotifyUrl);

    if (trackId) {
      // Redirect to the artist playlist app page with the track ID as a parameter
      navigate(`/track/${trackId}`);
    } else {
      alert('Invalid Spotify URL. Please enter a valid track URL.');
    }
  };

  const extractTrackIdFromUrl = (url) => {
    // Check if the URL matches the Spotify track URL pattern
    const match = url.match(/\/track\/([a-zA-Z0-9]+)/);

    if (match) {
      // Extracted Track ID from the URL
      return match[1];
    } else {
      return null; // URL doesn't match the pattern
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Artist Playlist App</h1>
      <p className="text-lg mb-2">Enter a Spotify track URL below:</p>
      <div className="flex">
        <input
          type="text"
          placeholder="Spotify Track URL"
          className="border rounded-l px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={spotifyUrl}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-r hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Home;
