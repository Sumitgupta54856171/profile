import './index.css'
import { Link } from 'react-router-dom';
import Profile from './component/Profile';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import AirbnbClone from './component/project/AirbnbClone';
import Socialmedia from './component/project/Socialmedia';
import Stockmarket from './component/Stockmarket';
import Project from './Project';
function App(){
return(<>


  <div className="h-screen w-full bg-gradient-to-br from-slate-700 via-gray-900 to-black overflow-scroll text-white">
  <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
     <Route path='/profile' element={<Profile/>}></Route>
  <Route path='/project' element={<Project/>}>
    <Route path='airbnb' element={<AirbnbClone/>}></Route>
    <Route path='stockmarket' element={<Stockmarket/>}></Route>
    <Route path='socialmedia' element={<Socialmedia/>}></Route>
  </Route>
     </Routes>

</div>
</>)
}
export default App;