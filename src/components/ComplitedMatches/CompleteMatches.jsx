import React from 'react';
import matchData from './matchData'; // Adjust the path as needed
import './CompleteMatch.css'; // Import the CSS

const CompleteMatches = () => {
  return (
    <div className="container-match">
      <div className="matches-container">
      <h2>Upcoming Matches</h2>
      {matchData[0].data.map((match) => (
        <div className="match-card" key={match.id}>
          <div className="match-info">
            <h3>{match.name}</h3>
            <p>{match.matchType.toUpperCase()} | {match.status}</p>
            <p><strong>Venue:</strong> {match.venue}</p>
            <p><strong>Date:</strong> {new Date(match.date).toLocaleDateString()}</p>
          </div>
          <div className="teams">
            {match.teamInfo.map((team) => (
              <div className="team" key={team.shortname}>
                <img src={team.img} alt={team.name} />
                <p>{team.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
    
  );
};

export default CompleteMatches;
