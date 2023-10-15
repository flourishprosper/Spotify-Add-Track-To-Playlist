import React from 'react';
import { useParams } from 'react-router-dom';

function TrackEmbed() {
  const { trackId } = useParams();

  return (
    trackId && (
      <iframe
        title="Spotify Embed"
        className="w-full md:w-1/2 my-2"  // Modified width here
        src={`https://open.spotify.com/embed/track/${trackId}`}
        width="500"  // Adjusted width
        height="500"  // Adjusted height
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    )
  );
}  


export default TrackEmbed;
