import React from "react"

export default function Button({name,clickKey}) {
    return (
        <div onClick={clickKey}>
            {name}
        </div>
    )
}