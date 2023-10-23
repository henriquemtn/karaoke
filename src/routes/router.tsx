import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "../pages/login"
import App from "../App"
import PlaylistPage from "../pages/playlist"
import SingPage from "../pages/bar/[id]"

export default function RouterManager() {
  
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />}/>    
            <Route path="/" element={<App />}/>
            <Route path="/playlist" element={<PlaylistPage />}/>      
            <Route path="/bar/:id" element={<SingPage />}/>             
        </Routes>
    </Router>
  )
}