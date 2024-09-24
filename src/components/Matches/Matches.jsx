import { useState, useEffect } from "react";
import "../Matches/Matches.css"; // CSS for styling

const Matches = () => {
  const [activeTab, setActiveTab] = useState("upcoming"); // Default to upcoming tab
  const [matches, setMatches] = useState({
    upcoming: [],
    completed: [],
  });

  // Mock API call to fetch match data
  useEffect(() => {
    const fetchMatches = () => {
      const sampleData = {
        upcoming: [
          {
            id: 1,
            teams: "Mumbai Titans vs Delhi Dynamos",
            team1Logo: "https://tse3.mm.bing.net/th?id=OIP.TndDxPfQ_r-qmJb6sVGXxAHaHa&pid=Api&P=0&h=220",
            team2Logo: "https://tse2.mm.bing.net/th?id=OIP.AGkWj-IE-10gtGPaA5YfmQHaHa&pid=Api&P=0&h=220",
            date: "Sep 20, 2024",
            venue: "Mumbai",
            time: "2:30 PM IST",
            matchType: "ODI",
          },
          {
            id: 2,
            teams: "Chennai Chargers vs Kolkata Kings",
            team1Logo: "https://tse4.mm.bing.net/th?id=OIP.R-Dtiu7TtxYF0w3hcYULbQHaHo&pid=Api&P=0&h=220",
            team2Logo: "https://w7.pngwing.com/pngs/177/108/png-transparent-cricket-world-cup-australia-national-cricket-team-batting-baseball-club-text-sport-logo.png",
            date: "Sep 25, 2024",
            venue: "Chennai",
            time: "5:00 PM IST",
            matchType: "Test Match",
          },
          {
            id: 3,
            teams: "Bangalore Thunder vs Hyderabad Heat",
            team1Logo: "https://logodix.com/logo/1188401.png",
            team2Logo: "https://tse4.mm.bing.net/th?id=OIP.1VjuYWqrn_ExMruE1yIa7gHaKe&pid=Api&P=0&h=220",
            date: "Sep 27, 2024",
            venue: "Bangalore",
            time: "3:00 PM IST",
            matchType: "T20",
          },
          {
            id: 4,
            teams: "Pune Prowlers vs Jaipur Warriors",
            team1Logo: "https://tse4.mm.bing.net/th?id=OIP._PTLhlt2kPntzLRedCw1MQHaKe&pid=Api&P=0&h=220",
            team2Logo: "https://tse1.mm.bing.net/th?id=OIP.0KdBtuIZB-lrkXZqBSiiVgHaHa&pid=Api&P=0&h=220",
            date: "Sep 30, 2024",
            venue: "Pune",
            time: "4:00 PM IST",
            matchType: "ODI",
          },
          {
            id: 5,
            teams: "Lucknow Lions vs Ahmedabad Avengers",
            team1Logo: "https://tse3.mm.bing.net/th?id=OIP.5JnNa0_rRclOY4_EIS2ABgHaHa&pid=Api&P=0&h=220",
            team2Logo: "https://i.pinimg.com/originals/32/6f/c2/326fc290623d55be600d681ddbb28630.jpg",
            date: "Oct 2, 2024",
            venue: "Lucknow",
            time: "6:00 PM IST",
            matchType: "Test Match",
          },
          {
            id: 6,
            teams: "Gujarat Gladiators vs Punjab Panthers",
            team1Logo: "https://png.pngtree.com/png-clipart/20230120/original/pngtree-karachi-cricket-club-logo-png-image_8923801.png",
            team2Logo: "https://png.pngtree.com/png-clipart/20230105/original/pngtree-prince-cricket-club-logo-png-image_8873314.png",
            date: "Oct 5, 2024",
            venue: "Ahmedabad",
            time: "7:30 PM IST",
            matchType: "T20",
          },
          {
            id: 7,
            teams: "Rajasthan Royals vs Mumbai Titans",
            team1Logo: "https://static.vecteezy.com/system/resources/previews/000/365/265/large_2x/cricket-logo-vector.png",
            team2Logo: "https://tse3.mm.bing.net/th?id=OIP.TndDxPfQ_r-qmJb6sVGXxAHaHa&pid=Api&P=0&h=220",
            date: "Oct 7, 2024",
            venue: "Jaipur",
            time: "5:00 PM IST",
            matchType: "ODI",
          },
          {
            id: 8,
            teams: "Chandigarh Crusaders vs Chennai Chargers",
            team1Logo: "https://tse3.mm.bing.net/th?id=OIP.2GO4mnEex6iaieZoLzV1twHaHa&pid=Api&P=0&h=220",
            team2Logo: "https://tse4.mm.bing.net/th?id=OIP.R-Dtiu7TtxYF0w3hcYULbQHaHo&pid=Api&P=0&h=220",
            date: "Oct 10, 2024",
            venue: "Chandigarh",
            time: "2:30 PM IST",
            matchType: "Test Match",
          },
        ],
        completed: [
          {
            id: 9,
            teams: "Hyderabad Heat vs Delhi Dynamos",
            team1Logo: "https://tse4.mm.bing.net/th?id=OIP.1VjuYWqrn_ExMruE1yIa7gHaKe&pid=Api&P=0&h=220",
            team2Logo: "https://tse2.mm.bing.net/th?id=OIP.AGkWj-IE-10gtGPaA5YfmQHaHa&pid=Api&P=0&h=220",
            date: "Sep 10, 2024",
            venue: "Hyderabad",
            result: "Hyderabad Heat won by 5 wickets",
            matchType: "T20",
          },
          {
            id: 10,
            teams: "Mumbai Titans vs Kolkata Kings",
            team1Logo: "https://tse3.mm.bing.net/th?id=OIP.TndDxPfQ_r-qmJb6sVGXxAHaHa&pid=Api&P=0&h=220",
            team2Logo: "https://w7.pngwing.com/pngs/177/108/png-transparent-cricket-world-cup-australia-national-cricket-team-batting-baseball-club-text-sport-logo.png",
            date: "Sep 15, 2024",
            venue: "Mumbai",
            result: "Mumbai Titans won by 100 runs",
            matchType: "ODI",
          },
          {
            id: 11,
            teams: "Chennai Chargers vs Pune Prowlers",
            team1Logo: "https://tse4.mm.bing.net/th?id=OIP.R-Dtiu7TtxYF0w3hcYULbQHaHo&pid=Api&P=0&h=220",
            team2Logo: "https://tse4.mm.bing.net/th?id=OIP._PTLhlt2kPntzLRedCw1MQHaKe&pid=Api&P=0&h=220",
            date: "Sep 18, 2024",
            venue: "Chennai",
            result: "Chennai Chargers won by 7 wickets",
            matchType: "ODI",
          },
          {
            id: 12,
            teams: "Ahmedabad Avengers vs Jaipur Warriors",
            team1Logo: "https://i.pinimg.com/originals/32/6f/c2/326fc290623d55be600d681ddbb28630.jpg",
            team2Logo: "https://tse1.mm.bing.net/th?id=OIP.0KdBtuIZB-lrkXZqBSiiVgHaHa&pid=Api&P=0&h=220",
            date: "Sep 22, 2024",
            venue: "Ahmedabad",
            result: "Ahmedabad Avengers won by 3 runs",
            matchType: "Test Match",
          },
          {
            id: 13,
            teams: "Punjab Panthers vs Lucknow Lions",
            team1Logo: "https://png.pngtree.com/png-clipart/20230105/original/pngtree-prince-cricket-club-logo-png-image_8873314.png",
            team2Logo: "https://tse3.mm.bing.net/th?id=OIP.5JnNa0_rRclOY4_EIS2ABgHaHa&pid=Api&P=0&h=220",
            date: "Sep 24, 2024",
            venue: "Chandigarh",
            result: "Punjab Panthers won by 50 runs",
            matchType: "ODI",
          },
          {
            id: 14,
            teams: "Rajasthan Royals vs Hyderabad Heat",
            team1Logo: "https://static.vecteezy.com/system/resources/previews/000/365/265/large_2x/cricket-logo-vector.png",
            team2Logo: "https://tse4.mm.bing.net/th?id=OIP.1VjuYWqrn_ExMruE1yIa7gHaKe&pid=Api&P=0&h=220",
            date: "Sep 26, 2024",
            venue: "Jaipur",
            result: "Rajasthan Royals won by 4 wickets",
            matchType: "T20",
          },
          {
            id: 15,
            teams: "Bangalore Thunder vs Delhi Dynamos",
            team1Logo: "https://logodix.com/logo/1188401.png",
            team2Logo: "https://tse2.mm.bing.net/th?id=OIP.AGkWj-IE-10gtGPaA5YfmQHaHa&pid=Api&P=0&h=220",
            date: "Sep 28, 2024",
            venue: "Bangalore",
            result: "Delhi Dynamos won by 1 run",
            matchType: "Test Match",
          },
          {
            id: 16,
            teams: "Gujarat Gladiators vs Mumbai Titans",
            team1Logo: "https://png.pngtree.com/png-clipart/20230105/original/pngtree-prince-cricket-club-logo-png-image_8873314.png",
            team2Logo: "https://tse3.mm.bing.net/th?id=OIP.TndDxPfQ_r-qmJb6sVGXxAHaHa&pid=Api&P=0&h=220",
            date: "Sep 30, 2024",
            venue: "Ahmedabad",
            result: "Gujarat Gladiators won by 5 wickets",
            matchType: "ODI",
          },
        ],
      };
      setMatches(sampleData);
    };

    fetchMatches(); // Call the function to load data
  }, []);

  return (
    <div className="matches-page">
      {/* Tab Header */}
      <div className="tab-header">
        <button
          className={activeTab === "upcoming" ? "tab-button active" : "tab-button"}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming
        </button>
        <button
          className={activeTab === "completed" ? "tab-button active" : "tab-button"}
          onClick={() => setActiveTab("completed")}
        >
          Completed
        </button>
      </div>

      {/* Match Listings */}
      <div className="match-list">
        {activeTab === "upcoming" &&
          matches.upcoming.map((match) => (
            <div className="match-card" key={match.id}>
              <div className="team-logos">
                <img src={match.team1Logo} alt="Team 1" className="team-logo" />
                <span className="vs">vs</span>
                <img src={match.team2Logo} alt="Team 2" className="team-logo" />
              </div>
              <div className="match-details">
                <h4>{match.teams}</h4>
                <p>{match.date}</p>
                <p>{match.time}</p>
                <p>{match.venue}</p>
                <p>{match.matchType}</p>
              </div>
            </div>
          ))}

        {activeTab === "completed" &&
          matches.completed.map((match) => (
            <div className="match-card" key={match.id}>
              <div className="team-logos">
                <img src={match.team1Logo} alt="Team 1" className="team-logo" />
                <span className="vs">vs</span>
                <img src={match.team2Logo} alt="Team 2" className="team-logo" />
              </div>
              <div className="match-details">
                <h4>{match.teams}</h4>
                <p>{match.date}</p>
                <p>{match.venue}</p>
                <p>{match.result}</p>
                <p>{match.matchType}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Matches;
