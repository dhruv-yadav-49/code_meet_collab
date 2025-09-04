import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import RoomCreate from "./pages/RoomCreate"

export default function App() {
    const location = useLocation()

    // All pages where Navbar/Footer should be hidden and you can add more pages only by using , and seperate them
    const hiddenLayoutRoutes = [""]

    const hideLayout = hiddenLayoutRoutes.includes(location.pathname)

    return (
        <>
            {!hideLayout && <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/room/create" element={<RoomCreate />} />
                
            </Routes>
            {!hideLayout && <Footer />}
        </>
    )
}
