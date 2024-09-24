import '../Profile/Profile.css'
import { useSelector } from 'react-redux'

function Profile() {
    const upmatches = useSelector((val) => val.upcomingMatchs);
    const profileData=useSelector((val)=>val.profile);
    console.log(profileData)

    // Example user data (replace this with actual data from your state or API)
    const userData = {
        name: "John Doe",
        email: "john.doe@example.com",
        password: "********",
        mobile: "+1234567890",
        teamName: "Team A",
        address: "123 Main St, City, Country",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    };

    return (
        <div className='pmainbox'>
            <div className="pcontainer">
                <div className="pleft">
                    <div className="ptopleft">
                        <div className="livematch">
                            <img src="https://i.pinimg.com/564x/03/eb/d6/03ebd625cc0b9d636256ecc44c0ea324.jpg" alt="profileImage" className="profileimage" />
                        </div>
                    </div>
                    <div className="pbottomleft">
                        <div className="matchhistory">
                            <div className="upcoming-matches">
                                <div><h3>Upcoming Matches</h3></div>
                                <ul>
                                    {upmatches.upcomingMatchs.map((val) => {
                                        return (
                                            <li key={val.id}>
                                                <div className="team1">
                                                    <img src={val.team1.logo} alt={`${val.team1.name} logo`} />
                                                    <span>{val.team1.name}</span>
                                                </div>
                                                <div className="team2">
                                                    <span>{val.team2.name}</span>
                                                    <img src={val.team2.logo} alt={`${val.team2.name} logo`} />
                                                </div>
                                                <div className="match-time"><h5>{val.matchTime}</h5></div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pright">
                    <div className="rightprofile">
                    <div className="ptopright">
                             {
                                profileData.length ==0?(<>Profile Data loading..........</>):(<><h2>User Profile</h2>
                                    <p><strong>Name:</strong> {profileData[0].name}</p>
                                    <p><strong>Email:</strong> {profileData[0].email}</p>
                                    <p><strong>Password:</strong> {profileData[0].password}</p>
                                    <p><strong>Mobile:</strong> {profileData[0].mobile}</p>
                                    <p><strong>Team Name:</strong> {profileData[0].teamName}</p>
                                    <p><strong>Address:</strong> {profileData[0].address}</p>
                                    <p><strong>Bio:</strong> {profileData[0].bio}</p></>)
                             }
                        </div>
                        <div className="pbottomright">
                            <h3>Completed Matches</h3>
                            <div className="completed-matches">
                                {/* Match 1 */}
                                <div className="match">
                                    <div className="teams">
                                        <div className="team">
                                            <img src="https://i.pinimg.com/736x/3d/a0/e6/3da0e61a924dbb9e680a7de8d2a2094c.jpg" alt="Team 1" />
                                            <span>Nagpur Ninjas</span>
                                        </div>
                                        <div className="vs">vs</div>
                                        <div className="team">
                                            <span>Indore Warriors</span>
                                            <img src="https://i.pinimg.com/736x/99/45/56/9945561d33620c89c129f1980f8584d1.jpg" alt="Team 2" />
                                        </div>
                                    </div>
                                    <div className="match-info">
                                        <div className="result">Nagpur Ninjas won by 5 wickets</div>
                                        <div className="location">Location: Nagpur</div>
                                        <div className="tournament">Tournament: T20 2024</div>
                                    </div>
                                </div>

                                {/* Match 2 */}
                                <div className="match">
                                    <div className="teams">
                                        <div className="team">
                                            <img src="https://i.pinimg.com/736x/e7/bd/51/e7bd519db4dbc68defdee95543b5653a.jpg" alt="Team 3" />
                                            <span>Gujarat Titans</span>
                                        </div>
                                        <div className="vs">vs</div>
                                        <div className="team">
                                            <span>Delhi Sultans</span>
                                            <img src="https://i.pinimg.com/736x/ed/9f/9d/ed9f9dc331cf1d004b47b2776e66202f.jpg" alt="Team 4" />
                                        </div>
                                    </div>
                                    <div className="match-info">
                                        <div className="result">Ahamadabad Titans won by 6 runs</div>
                                        <div className="location">Location: Wankhede Stadium</div>
                                        <div className="tournament">Tournament: World Cup 2024</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
