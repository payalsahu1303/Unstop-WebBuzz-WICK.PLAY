import React, { useState } from 'react';
import './LiveMatches.css';
import matchData from './matchData';
import { useNavigate } from 'react-router-dom';
import { liveMatch } from '../../features/cricket/cricketSlice';
import { useDispatch } from 'react-redux';
function LiveMatches() {
    const data = matchData;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const addShow = async (val) => {
        await dispatch(liveMatch(val)); // Ensure liveMatch returns a promise
        navigate('/showmatch');
    }

 
    // Call the function to get data from the API







    return (
        <div className="matchContainer">
            {/* Logo Banner Section */}
            <div className="logoBanner">
                <img
                    src="https://i.pinimg.com/564x/51/6f/77/516f7784ae14dbdbc59b3955bde4ff46.jpg"
                    alt="Live Match Banner"
                    className="logoImage"
                />
            </div>

            {/* Matches Section */}
            <div className="matches">
                {
                    data.map((val) => (
                        <div className="matchCart" key={val.match_id}>
                            {/* Banner Image */}
                            <div className="banner"  >
                                <img
                                    src={val.banner_image}
                                    alt={`${val.teams.team1} vs ${val.teams.team2}`}
                                />
                            </div>
                            {/* Match Score */}
                            <div className="score">
                                <small className="liveLabel">Live</small> {/* Added the small tag for live match */}
                                <p>
                                    <strong>{val.teams.team1}</strong>: {val.score.team1_score}
                                </p>
                                <p>
                                    <strong>{val.teams.team2}</strong>: {val.score.team2_score}
                                </p>
                            </div>

                            {/* Stadium & Description */}
                            <div className="stadium">
                                <p>
                                    <strong>Stadium:</strong> {val.stadium}
                                </p>
                                <p>{val.description}</p>
                                <button onClick={() => {
                                    addShow({
                                        stadium: val.stadium,
                                        banner: val.banner_image,
                                        team1: val.teams.team1,
                                        team2: val.teams.team2,
                                        id: val.match_id,
                                        score1: val.score.team1_score,
                                        score2: val.score.team2_score,
                                    })
                                }} className='showbtn'>View</button>
                            </div>
                        </div>
                    ))
                }
            </div>
         </div>
    );
}

export default LiveMatches;
