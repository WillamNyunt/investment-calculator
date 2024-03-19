import Header from "./components/header"
import UserInput from "./components/userInput"
import { useState, Fragment } from "react"

const initialInput = {
  initialInvestment: '',
  annualInvestment: '',
  expectedReturn: '',
  duration: '',
}

function App() {
  const [userInputValue, setUserInputValue] = useState(initialInput)

  function userInputOnChangeHandler(e) {
    setUserInputValue(prevInput => { return { ...prevInput, ...e } })
  }

  return (
    <Fragment>
      <Header />
      <UserInput userInput={userInputValue} changeUserInput={userInputOnChangeHandler} />
    </Fragment>
  )
}

export default App
