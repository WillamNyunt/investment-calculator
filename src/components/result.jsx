import React from 'react'

export default function Result({ tableValues }) {

    console.log(tableValues)
    return (
        <table id='result'>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
                {tableValues.map(tableValue =>
                    <tr key={tableValue.year}>
                        <td>{tableValue.year}</td>
                        <td>{tableValue.investmentValue}</td>
                        <td>{tableValue.yearlyInterest}</td>
                        <td>{tableValue.totalInterest}</td>
                        <td>{tableValue.investedCapital}</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}
