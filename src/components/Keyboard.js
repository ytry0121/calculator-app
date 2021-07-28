import React from "react"
import Button from "./Button"

export default function Keyboard({  nums, symbols, clickNum, clickSymbol, resetAll, clickEqual }) {

    return (// <div className={`keyboardWrapper ${theme+"B"}`}>
        <div className="board">
            {/* <div className="numBoard">*/}
            {nums.map(i =>
                <Button name={"k" + i} symbol={i} key={i} clickKey={clickNum}  />
            )}
            {symbols.map(i =>
                <Button name={i.name} symbol={i.symbol} key={i.name} clickKey={clickSymbol}  />
            )}
            {/* </div> */}
            <Button name="point" symbol="." key="point" clickKey={clickNum}  />
            <Button name="del" symbol="DEL" key="del" clickKey={resetAll}  />
            <Button name="reset" symbol="RESET" key="reset" clickKey={resetAll}  />
            <Button name="equal" symbol="=" key="equal" clickKey={clickEqual}  />
        </div>)
    // </div>
}