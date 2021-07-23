import React from "react"

export default function Screen({ theme, result }) {
    return <div className={`clacWindow ${theme + "S"}`}>
        <span>{result}</span>
    </div>
}