import React from "react"

export default function Button({name,symbol,clickKey}) {
    return (
        <div className={`key ${name}`} onClick={clickKey}>
           <span>{symbol}</span> 
        </div>
    )
}