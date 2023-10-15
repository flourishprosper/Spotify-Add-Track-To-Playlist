import React from 'react';

function TrackEmbed({ trackId }) {
    return (
      trackId && (
        <iframe
          title="Spotify Embed"
          className="w-full md:w-1/3 my-2"  // Adjusted margin here
          src={`https://open.spotify.com/embed/track/${trackId}`}
          width="300"
          height="380"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )
    );
  }  

export default TrackEmbed;
