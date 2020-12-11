import React, { useEffect, useState } from "react"
import Button from './Components/Button/Button'
import "./App.css"

const App = () => {
  const [value, setValue] = useState("0")

    const handleOnClick = (value) => {
      setValue(value)
    }

    return (
      <div className="app">
        <div className="top">
        </div>
        <div className="display">{value}</div>
        <div className="buttons">
          <Button onClick={handleOnClick} content="AC"type="function"/>
          <Button onClick={handleOnClick} content="±" type="function" />
          <Button onClick={handleOnClick} content="%" type="function" />
          <Button onClick={handleOnClick} content="÷" type="operator" />
          <Button onClick={handleOnClick} content="7" />
          <Button onClick={handleOnClick} content="8" />
          <Button onClick={handleOnClick} content="9" />
          <Button onClick={handleOnClick} content="×" type="operator" />
          <Button onClick={handleOnClick} content="4" />
          <Button onClick={handleOnClick} content="5" />
          <Button onClick={handleOnClick} content="6" />
          <Button onClick={handleOnClick} content="−" type="operator" />
          <Button onClick={handleOnClick} content="1" />
          <Button onClick={handleOnClick} content="2" />
          <Button onClick={handleOnClick} content="3" />
          <Button onClick={handleOnClick} content="+" type="operator" />
          <Button onClick={handleOnClick} content="0" type="zero"/>
          <Button onClick={handleOnClick} content="." />
          <Button onClick={handleOnClick} content="=" type="operator" />
        </div>
        <div className="bottom" />
      </div>
    )
  }

  export default App