import {Route, Routes} from 'react-router';
import './index.css';
import HomePage from './app/page';
import AboutPage from './app/about/page';
import Navbar from './components/layout/Navbar';
import UserPage from "./app/user/page.jsx";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path={'/user/:id'} element={<UserPage/>}/>
                <Route path={'*'} element={<div>Oups! Page introuvable</div>}/>
            </Routes>
        </>
    )
}

export default App
