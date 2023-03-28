import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
    NavBar,
    SideBar,
    Feed,
    SearchFeed,
    VideoDetails,
    ChannelDetails,
} from "./components/index";

export const Expanded = createContext();

function App() {
    const [sidebarExpanded, setSidebarExpanded] = useState(true);

    const hamburgerClick = () => {
        setSidebarExpanded((prev) => !prev);
    };

    return (
        <Router>
            <Expanded.Provider value={sidebarExpanded}>
                <NavBar hamburgerClick={hamburgerClick}/>
                <SideBar />
                <Routes>
                    <Route path="/" element={<Feed />} />
                    <Route path="/video/:id" element={<VideoDetails />} />
                    <Route path="/channel/:id" element={<ChannelDetails />} />
                    <Route
                        path="/search/:searchTerm"
                        element={<SearchFeed />}
                    />
                </Routes>
            </Expanded.Provider>
        </Router>
    );
}

export default App;
