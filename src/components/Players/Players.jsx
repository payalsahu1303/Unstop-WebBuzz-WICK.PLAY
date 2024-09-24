import React from 'react';
import playerData from './playerData'; 
import './Players.css'; // CSS file

const Players = () => {
  const players = playerData[0].data; // Accessing the player data

  return (
    <div className="container-player">
      <div className="players-container">
      <h1 className="players-title">Player List</h1>
      <div className="players-grid">
        {players.map(player => (
          <div className="player-card" key={player.id}>
            <h2 className="player-name">{player.name}</h2>
            <p className="player-country">{player.country}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Players;
