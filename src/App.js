import React, { useState, useEffect } from 'react';
//import Button from "./components/Button"
import Header from "./components/Header"
import Screen from "./components/Screen"
import Keyboard from "./components/Keyboard"

function App() {
  const [themeValue, setThemeValue] = useState("1");
  const [theme, setTheme] = useState("theme" + themeValue);
  const [result, setResult] = useState("0");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [symbol, setSymbol] = useState("");
  const body = document.getElementById("body")
  body.classList.add(theme)

  let n = 0;
  const nums = Array();
  while (n < 10) {
    nums.push(n)
    n++;
  }
  //  const symbols = ["+", "-", "x", "/"];
  const symbols = new Array({ "name": "add", "symbol": "+" },
    { "name": "sub", "symbol": "-" },
    { "name": "multiply", "symbol": "x" },
    { "name": "divide", "symbol": "/" });
  //const [formula, setFormula] = useState("");

  useEffect(() => {
    // console.table(result, num1, symbol, num2);
  });
  function clickNum(e) {
    let givenNum
    if ((num1 !== "" && symbol !== "" && num2 === "") || (num1 === "" && symbol === "" && num2 === "")) {
      givenNum = e.target.innerText
    } else {
      givenNum = (typeof result === 'string' ? result.replace(/,/g, '') : result) + e.target.innerText
    }
    if (symbol === "") {
      setNum1(parseFloat(givenNum))
    } else {
      setNum2(parseFloat(givenNum))
    }
    //const re=/(\d)(?=(\d{3})+(?!\d))/g
    //https://blog.abelotech.com/posts/number-currency-formatting-javascript/
    // const numFormat = new Intl.NumberFormat('en-GB')
    // setResult(numFormat.format(givenNum))
    setResult(givenNum)
  }
  /**
   * 
   * result , num1 , symbol, num2
   * 1,1,'','' input 1st number
   * 1,1,+,''  input symbol
   * 2,1,+,'2'  input 2nd number
   * 3,3,'','' press equal
   * 3,3,+.''  input symbol
   * 2,3,+,2 input 2nd number
   * 5,5,'','' press equal
   */
  function clickSymbol(e) {
    if (symbol !== "" && num2 !== "") {
      clickEqual()
    }
    // if(num1===""){
    //   console.log("(-,-)")
    //   setNum1(result)
    // }
    setNum1(parseFloat(result))
    setSymbol(e.target.innerText)
    /**
  * symbol !== "" has two pattarns
  * 
  * [1] before input 3rd number
  *  1+2+
  * [2] typo 
  * 1+ -> 1-
  */
  }

  function clickEqual() {
    let answer = result;
    if (symbol === "+") {
      answer = num1 + num2
    } else if (symbol === "-") {
      answer = num1 - num2
    } else if (symbol === "x") {
      answer = num1 * num2
    } else if (symbol === "/") {
      answer = num1 / num2
    }
    setResult(answer)
    setNum1("")
    setSymbol("")
    setNum2("")
  }

  function resetAll() {
    setNum1("")
    setNum2("")
    setResult("")
    setSymbol("")
  }
  function handleTheme(e) {
    const newValue = e.target.value;
    const newTheme = "theme" + newValue
    setThemeValue(newValue)
    setTheme(newTheme)

    body.classList.remove(theme)
    body.classList.add(newTheme)

    const ball = document.querySelector(".ball");
    const d = (newValue - 1) * 18;
    ball.style.transition = ".6s";
    ball.style.left = d + "px";

  }

  return (
    <div className={`calcWrapper ${theme}`}>
      <Header handleTheme={handleTheme} themeValue={themeValue} />
      <Screen  result={result} />
      <Keyboard nums={nums}
        symbols={symbols}
        clickNum={clickNum}
        clickSymbol={clickSymbol}
        resetAll={resetAll}
        clickEqual={clickEqual}
      />
      {/* <div onClick={resetAll}>Reset</div>
      <div onClick={clickEqual}>=</div> */}
    </div>
  );
}

export default App;
