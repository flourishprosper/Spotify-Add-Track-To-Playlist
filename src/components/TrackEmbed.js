import React from 'react';
import { useParams } from 'react-router-dom';

function TrackEmbed() {
    const { trackId } = useParams();

    return (
      trackId && (
        <iframe
          title="Spotify Embed"
          className="w-full md:w-1/3 my-2"
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
