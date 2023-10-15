import React from 'react';
import { useParams } from 'react-router-dom';
import TrackEmbed from './TrackEmbed';
import PlaylistSelector from './PlaylistSelector';

function Track({ token, playlists, setSelectedPlaylist, addTrackToPlaylist }) {
  const { trackId } = useParams();

  return (
<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
    <TrackEmbed trackId={trackId} />
    {token && (
        <PlaylistSelector 
            trackId={trackId} 
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
