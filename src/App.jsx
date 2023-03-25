import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
    NavBar,
    Feed,
    SearchFeed,
    VideoDetails,
    ChannelDetails,
} from "./components/index";

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
