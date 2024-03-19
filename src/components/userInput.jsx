import React from 'react'
import UserInputField from './userInputField'

export default function UserInput({userInput, changeUserInput}) {

    function handleInvestmentChange(e) {
        changeUserInput({initialInvestment:  e.target.value === '' ? '' : Number(e.target.value)})
    }

    function handleAnnualInvestmentChange(e) {
        changeUserInput({annualInvestment: e.target.value === '' ? '' : Number(e.target.value)})
    }

    function handleReturnChange(e) {
        changeUserInput({expectedReturn: e.target.value === '' ? '' : Number(e.target.value)})
    }

    function handleDurationChange(e) {
        changeUserInput({duration: e.target.value === '' ? '' : Number(e.target.value)})
    }


    return (
        <div id="user-input">
            <UserInputField onInputChange={(e) => handleInvestmentChange(e)} name='initialInvestment' label='Initial Investment' value={userInput.initialInvestment} />
            <UserInputField onInputChange={(e) => handleAnnualInvestmentChange(e)} name='annualInvestment' label='Annual Investment' value={userInput.annualInvestment} />
            <UserInputField onInputChange={(e) => handleReturnChange(e)} name='expectedReturn' label='Expected Return' value={userInput.expectedReturn} />
            <UserInputField onInputChange={(e) => handleDurationChange(e)} name='duration' label='Duration' value={userInput.duration} />
        </div>
    )
}
