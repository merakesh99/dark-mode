import React from 'react'
import "./App.css"
export default function DarkMode() {

    const setDark = () => {

        // 2
        localStorage.setItem("theme", "dark");

        // 3
        document.documentElement.setAttribute("data-theme", "dark");
    };

    const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    };

    // 4
    const storedTheme = localStorage.getItem("theme");

    const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;

    const defaultDark =
        storedTheme === "dark" || (storedTheme === null && prefersDark);

    if (defaultDark) {
        setDark();
    }

    // 5
    const toggleTheme = (e) => {
        if (e.target.checked) {
            setDark();
        } else {
            setLight();
        }
    };


    return (
        <div className="toggle-theme-wrapper">
            <span>🔆</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    // 6
                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                />
                <div className="slider round"></div>
            </label>
            <span>🌙</span>
        </div>
    );
}
