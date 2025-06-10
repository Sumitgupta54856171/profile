import './index.css'
import { Link } from 'react-router-dom';
import Profile from './component/Profile';
import { Route,Routes } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
function App(){
return(<>


  <div className="h-screen w-full bg-gradient-to-br from-gray-700 via-gray-900 to-black overflow-scroll ">
  <Navbar></Navbar>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
     <Route path='/profile' element={<Profile/>}></Route></Routes>
</div>
</>)
}
export default App;