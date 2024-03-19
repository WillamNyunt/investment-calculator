import React from 'react'

export default function UserInputField({name, label}) {
    return (
        <div className="input-group">
        <label htmlFor={name}>{label}</label>
        <input type="number" name={name} />
    </div>
    )
}
