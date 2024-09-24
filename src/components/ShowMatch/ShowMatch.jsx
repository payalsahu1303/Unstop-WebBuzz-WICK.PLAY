import React from 'react';
import './ShowMatch.css';
import { useSelector } from 'react-redux';

function ShowMatch() {
    const data = useSelector((state) => state.livematch);
    console.log(data);

    return (
        <div className="showContainer">
            <div className='showMatch'>
                {
                    data.map((val) => (
                        <div className="showbox" key={val.id}>
                            <div className="imgLogo">
                                <img src={val.banner} alt="" />
                            </div>
                            <div className="temanames">
                                <h2>{val.team1}</h2>
                                <h3 className='vs'>vs</h3>
                                <h2>{val.team2}</h2>
                            </div>
                            <div className="score">
                                <h4>{val.score1}</h4>
                                <h4>{val.score2}</h4>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="players">
                <h3>Players:</h3>
                <div className="playerScoreboard">
                    <div className="team">
                        <h4>{data[0]?.team1} Players</h4>
                        <ul>
                            <li><img src="https://cricclubs.com/documentsRep/profilePics/a6859ff7-e7eb-468d-8c97-035909c35bb8.jpeg" alt="Arjun Patel" /><span>Arjun Patel</span></li>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6dzZcazQfHbFwIYHZHukR7obFbeyOT1Xq6w&s" alt="Ravi Sharma" /><span>Ravi Sharma</span></li>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfvxAOVOCCoYSsornKXmWEhdFU_h5hkPFHzw&s" alt="Manish Verma" /><span>Manish Verma</span></li>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCO42K5GXUZ7tiB5i-58jEXoFkuDTKsCmVw&s" alt="Karan Joshi" /><span>Karan Joshi</span></li>
                            <li><img src="https://stairfirst.com/blog/wp-content/uploads/2021/03/Siddharth-Mehta-2-960x960.jpg" alt="Siddharth Mehta" /><span>Siddharth Mehta</span></li>
                            <li><img src="https://images.hindustantimes.com/img/2021/03/19/550x309/29019b3e-88a9-11eb-b2e8-8519d226f89d_1616154742049.jpg" alt="Rohit Chaudhary" /><span>Rohit Chaudhary</span></li>
                            <li><img src="https://static.toiimg.com/photo/89408700.cms" alt="Vikram Singh" /><span>Vikram Singh</span></li>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDXTk4AGLpM-Am9sW__tyFqD0ncBLrtVDCJw&s" alt="Amit Yadav" /><span>Amit Yadav</span></li>
                            <li><img src=" https://media.licdn.com/dms/image/D4D03AQHedzv1eqxOIw/profile-displayphoto-shrink_200_200/0/1688378764887?e=2147483647&v=beta&t=fPCSWwv7n4DN5f6H9w5fBlhIUKm0bfVGeRQu9CMNMow" alt="Nikhil Agarwal" /><span>Nikhil Agarwal</span></li>
                            <li><img src="https://images.filmibeat.com/img/popcorn/profile_photos/deepak-thakur-20180917110116-42152.jpg" alt="Deepak Thakur" /><span>Deepak Thakur</span></li>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzVQFnadQkMYa9A-4uGc0j2NJVna7FW3hUg&s" alt="Rahul Nair" /><span>Rahul Nair</span></li>
                        </ul>

                    </div>
                    <div className="team">
                        <h4>{data[0]?.team2} Players</h4>
                        <ul>
                            <li><img src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1569737119330_Me4EXuhZa47e.jpg?width=3840&quality=75&format=auto" alt="Sunil Bansal" /><span>Sunil Bansal</span></li>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_D2jADarG7lrTF_IyDeGG9LxRabBPc7-IGg&s" alt="Ritesh Iyer" /><span>Ritesh Iyer</span></li>
                            <li><img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Ajay_Kumar_Reddy.jpg" alt="Ajay Kumar" /><span>Ajay Kumar</span></li>
                            <li><img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1oW9cv.img?w=768&h=512&m=6&x=460&y=143&s=246&d=246" alt="Shivam Reddy" /><span>Shivam Reddy</span></li>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuiDJP3qgYqhqdvKvswHAiIfbAXWSyiwD-9w&s" alt="Vishal Gupta" /><span>Vishal Gupta</span></li>
                            <li><img src="https://static.toiimg.com/thumb/msid-87607323,width-400,resizemode-4/87607323.jpg" alt="Akash Chaudhary" /><span>Akash Chaudhary</span></li>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpyKG-fZMccttD-1HtAhnnXcC8rWvTn4khSA&s" alt="Jitendra Singh" /><span>Jitendra Singh</span></li>
                            <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnn0W1ZDuadLCMC0U13iq4mfeJpn3bpkx9A&s" alt="Kuldeep Sharma" /><span>Kuldeep Sharma</span></li>
                            <li><img src="https://cricheroes-media-mumbai.s3.ap-south-1.amazonaws.com/user_profile/1707556014717_CUKoKgbbx7GO.jpg?width=3840&quality=75&format=auto" alt="Puneet Malik" /><span>Puneet Malik</span></li>
                            <li><img src="https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2023/03/rohit_sethi-1.jpeg" alt="Rohit Sethi" /><span>Rohit Sethi</span></li>
                            <li><img src="https://images.indianexpress.com/2017/12/vikas-mishra-m.jpg?w=414" alt="Vikas Dubey" /><span>Vikas Dubey</span></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowMatch;
