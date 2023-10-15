import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom'; // Import useLocation
import QRCode from 'qrcode.react';  // Import QRCode component
import TrackEmbed from './TrackEmbed';
import PlaylistSelector from './PlaylistSelector';

function Track({ token, playlists, setSelectedPlaylist, addTrackToPlaylist }) {
  const { trackId } = useParams();
  const location = useLocation(); // Get the current location
  const [copied, setCopied] = useState(false); // State to track whether the URL is copied or not

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.origin + location.pathname).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

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

      {/* Copy Link Button */}
      <button onClick={copyLinkToClipboard} className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full mx-2 mt-2">
        {copied ? "Link Copied!" : "Copy Link"}
      </button>

      {/* QR Code */}
      <div className="mt-4">
        <QRCode value={window.location.origin + location.pathname} />
      </div>


    </div>
  );
}

export default Track;
