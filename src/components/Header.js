import React from "react"

export default function Header({ handleTheme, themeValue }) {

    return <div className="header">
        <h2>calc</h2>
        <div className="themeWrapper">
            <div>THEME/123 </div>
            {/* <div className="themeToggle"> */}
            <form className="toggleForm">
                <span className="ball"></span>
                <label htmlFor="t1">
                    <input type="radio" id="t1" name="theme" value="1" checked={themeValue === "1"} onChange={handleTheme} />
                </label>
                <label htmlFor="t2">
                    <input type="radio" id="t2" name="theme" value="2" checked={themeValue === "2"} onChange={handleTheme} />
                </label>
                <label htmlFor="t3">
                    <input type="radio" id="t3" name="theme" value="3" checked={themeValue === "3"} onChange={handleTheme} />
                </label>
            </form>
            {/* </div> */}
        </div>
    </div>
}