import Header from "./components/header"
import UserInput from "./components/userInput"
import { useState, Fragment } from "react"
import { calculateInvestmentResults } from "./util/investment"

const initialInput = {
  initialInvestment: '',
  annualInvestment: '',
  expectedReturn: '',
  duration: '',
}

function App() {
  const [userInput, setUserInput] = useState(initialInput)

  function userInputOnChangeHandler(e) {
    setUserInput(prevInput => { return { ...prevInput, ...e } })
  }



  return (
    <Fragment>
      <Header />
      <UserInput userInput={userInput} changeUserInput={userInputOnChangeHandler} />
    </Fragment>
  )
}

export default App
