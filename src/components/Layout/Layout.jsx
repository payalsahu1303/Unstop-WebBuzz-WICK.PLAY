import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Home from '../Home/Home'
import Turnaments from '../Tournament/Turnaments'
import Profile from '../Profile/Profile'
import Contact from '../Contact/Contact';
import Registration from '../Registration/Registration'
import Matches from '../Matches/Matches'
import Login from '../Login/Login'
import Signup from '../SignUp/Signup'
import LiveMatches from '../LiveMatch/LiveMatches'
import ShowMatch from '../ShowMatch/ShowMatch';
import CompleteMatches from '../ComplitedMatches/CompleteMatches'
import Players from '../Players/Players'
 
function Layout() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/matches' element={<Matches />} />
                    <Route path='/turnaments' element={<Turnaments />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/registor' element={<Registration />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/livematches' element={<LiveMatches />} />
                    <Route path='/showmatch' element={<ShowMatch />} />
                    <Route path='/complete' element={<CompleteMatches />} />
                    <Route path='/players' element={<Players />} />
                 </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Layout
