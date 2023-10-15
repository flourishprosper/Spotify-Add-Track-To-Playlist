import React from 'react';

function PlaylistSelector({ token, playlists, setSelectedPlaylist, addTrackToPlaylist }) {
    return (
      <div className="flex flex-col md:flex-row items-center">
        <select className="bg-gray-800 text-white px-4 py-2 rounded-full mx-2" onChange={(e) => setSelectedPlaylist(e.target.value)}>
          {playlists.map((playlist) => (
            <option key={playlist.id} value={playlist.id}>
              {playlist.name}
            </option>
          ))}
        </select>
        <button onClick={addTrackToPlaylist} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full mx-2">Add this track to this playlist</button>
      </div>
    );
  }  

export default PlaylistSelector;
