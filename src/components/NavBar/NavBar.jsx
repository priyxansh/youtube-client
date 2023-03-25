import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
    return (
        <nav>
            <ul className="navlist">
                <li className="navitem">
                    <Link to="/" className="navlink hamburgericon">
                        <svg
                            viewBox="0 0 24 24"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g class="style-scope yt-icon">
                                <path
                                    d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"
                                    class="style-scope yt-icon"
                                ></path>
                            </g>
                        </svg>
                    </Link>
                </li>
                <li className="navitem">
                    <Link to="/" className="navlink navlogo">
                        <img src="../../src/assets/yt-logo.png" alt="" />
                    </Link>
                </li>
            </ul>
            <SearchBar />
        </nav>
    );
}

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const searchBarRef = useRef(null);

    return (
        <div className="searchbar">
            <form className="input-control" ref={searchBarRef}>
                <input
                    placeholder="Search"
                    type="text"
                    name="search-input"
                    id="search-input"
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                    onFocus={() => {
                        searchBarRef.current.style.border =
                            "1px solid var(--accent)";
                    }}
                    onBlur={() => {
                        searchBarRef.current.style.border = "none";
                    }}
                />
            </form>
                <button type="button" className="searchbutton">
                    <span className="searchicon">
                        <img src="../../src/assets/search-icon.svg" alt="" />
                    </span>
                </button>
        </div>
    );
};
