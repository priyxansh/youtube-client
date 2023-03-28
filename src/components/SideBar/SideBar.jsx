import React, { useState, useContext } from "react";
import { Expanded } from "../../App";
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
    const expanded = useContext(Expanded);

    return (
        <aside className="sidebar" data-isexpanded={expanded}>
            <div className="categories">
                {categories.map((category) => (
                    <Category title={category.title} key={category.key} />
                ))}
            </div>
        </aside>
    );
}

let Category = ({ title }) => {
    return (
        <div className="category">
            <span>{title}</span>
        </div>
    );
};
