import React from "react"

export default function Header({handleTheme}) {
    return <div className="header">
        <h2>calc</h2>
        <div className= "themeWrapper">THEME/
      <span onClick={handleTheme}>1</span>
            <span onClick={handleTheme}>2</span>
            <span onClick={handleTheme}>3</span>
        </div>
    </div>
}