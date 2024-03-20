import React from 'react'
import UserInputField from './userInputField'

export default function UserInput({userInput, changeUserInput}) {

    function handleChange(e, type) {
        changeUserInput({[type] : e.target.value === '' ? '' : Number(e.target.value)})
    }

    return (
        <div id="user-input">
            <UserInputField onInputChange={(e) => handleChange(e, 'initialInvestment')} name='initialInvestment' label='Initial Investment' value={userInput.initialInvestment} />
            <UserInputField onInputChange={(e) => handleChange(e, 'annualInvestment')} name='annualInvestment' label='Annual Investment' value={userInput.annualInvestment} />
            <UserInputField onInputChange={(e) => handleChange(e, 'expectedReturn')} name='expectedReturn' label='Expected Return' value={userInput.expectedReturn} />
            <UserInputField onInputChange={(e) => handleChange(e, 'duration')} name='duration' label='Duration' value={userInput.duration} />
        </div>
    )
}
