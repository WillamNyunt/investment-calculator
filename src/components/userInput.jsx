import React from 'react'
import UserInputField from './userInputField'

export default function UserInput(props) {
    

    return (
        <div id="user-input">
            <UserInputField name='initialInvestment' label='Initial Investment' />
            <UserInputField name='annualInvestment' label='Annual Investment' />
            <UserInputField name='expectedReturn' label='Expected Return' />
            <UserInputField name='duration' label='Duration' />
        </div>
    )
}
