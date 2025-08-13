import {Routes, Route} from 'react-router-dom'
import Profiles from './pages/Profiles'
import Home from './pages/Home'
import Config from './pages/Config';
import Account from './pages/Account'; 

function MainRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Profiles/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/config' element={<Config />} />
            <Route path='/account' element={<Account />} />  
        </Routes>
    );
}
export default MainRoutes;