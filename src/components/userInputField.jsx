export default function UserInputField({name, label, value, onInputChange}) {
    return (
        <div className="input-group">
        <label htmlFor={name}>{label}</label>
        <input type="number" name={name} onChange={(e) => onInputChange(e)} value={value} />
    </div>
    )
}
