import React, { useState } from "react";
import "./SideBar.css";

const categories = [
    { title: "Home", key: 0 },
    { title: "Trending", key: 1 },
    { title: "Shopping", key: 2 },
    { title: "Music", key: 3 },
    { title: "Films", key: 4 },
    { title: "Live", key: 5 },
    { title: "Gaming", key: 6 },
    { title: "News", key: 7 },
    { title: "Sport", key: 8 },
    { title: "Learning", key: 9 },
    { title: "Fashion & beauty", key: 10 },
];

export default function SideBar() {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="sidebar">
            <div className="categories">
                {categories.map((category) => (
                    <div className="category">
                        <span>{category.title}</span>
                    </div>
                ))}
            </div>
        </aside>
    );
}
