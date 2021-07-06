import React from "react"
import Button from "./Button"

export default function Keyboard({ nums, symbols, clickNum, clickSymbol, resetAll, clickEqual }) {
    return <div className="keyboardWrapper">
        <div className="board">
            <div className="numBoard">
                {nums.map(i =>
                    <Button name={i} key={i} clickKey={clickNum} />
                )}
                {symbols.map(i =>
                    <Button name={i} key={i} clickKey={clickSymbol} />
                )}
            </div>
        </div>
        <Button name={"Reset"} key={"Reset"} clickKey={resetAll} />
        <Button name={"="} key={"="} clickKey={clickEqual} />
    </div>
}