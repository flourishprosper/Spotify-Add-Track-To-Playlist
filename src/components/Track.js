// Track.js
import React from 'react';
import TrackEmbed from './TrackEmbed';
import PlaylistSelector from './PlaylistSelector';

function Track({ trackId, token, playlists, setSelectedPlaylist, addTrackToPlaylist }) {
  return (
    <div>
      <TrackEmbed trackId={trackId} />
      {token && (
        <PlaylistSelector 
          token={token} 
          playlists={playlists} 
          setSelectedPlaylist={setSelectedPlaylist} 
          addTrackToPlaylist={addTrackToPlaylist} 
        />
      )}
    </div>
  );
}

export default Track;
