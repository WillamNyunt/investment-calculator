import Header from "./components/header"
import UserInput from "./components/userInput"
import { useState, Fragment } from "react"
import { calculateInvestmentResults } from "./util/investment"
import Result from "./components/result"
const initialInput = {
  initialInvestment: 0,
  annualInvestment: 0,
  expectedReturn: 0,
  duration: 0,
}

function App() {
  const [userInputs, setUserInputs] = useState(initialInput)
  
  let investmentArr = [...calculateInvestmentResults(userInputs)];

  function userInputOnChangeHandler(e) {
    setUserInputs(prevInput => { 
      return ({ ...prevInput, ...e }) 
    })
  }

  return (
    <Fragment>
      <Header />
      <UserInput userInput={userInputs} changeUserInput={userInputOnChangeHandler} />
      <Result tableValues={investmentArr} inputValues={userInputs} />
    </Fragment>
  )
}

export default App
