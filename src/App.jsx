import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Feed from "./components/Feed/Feed";
import SearchFeed from "./components/SearchFeed/SearchFeed";
import VideoDetails from "./components/VideoDetails/VideoDetails";
import ChannelDetails from "./components/ChannelDetails/ChannelDetails";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/video/:id" element={<VideoDetails />} />
                <Route path="/channel/:id" element={<ChannelDetails />} />
                <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
        </Router>
    );
}

export default App;
