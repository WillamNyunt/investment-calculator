// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});


// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({ initialInvestment, annualInvestment, expectedReturn, duration }) {
  let investmentResults = [];
  let totalInterest = 0;
  let yearlyInterest = 0;
  let investedCapital = initialInvestment;
  let investmentValue = initialInvestment;

  for (let year = 1; year <= duration; year++) {
    investmentValue = investmentValue * (1 + (expectedReturn/100)) + annualInvestment;
    investedCapital += annualInvestment

    //if greater than year 
    if (year > 1) {
      yearlyInterest = (investmentValue - investedCapital) - totalInterest;
    } else {
      yearlyInterest = investmentValue - investedCapital;
    }

    totalInterest = investmentValue - investedCapital

    investmentResults.push({
      year,
      investmentValue,
      yearlyInterest,
      totalInterest,
      investedCapital
    })
  }

  let processedInvestmentResults = [...investmentResults.map(r => ({
    year: r.year, 
    investmentValue: formatter.format(r.investmentValue),
    yearlyInterest: formatter.format(r.yearlyInterest),
    totalInterest: formatter.format(r.totalInterest),
    investedCapital: formatter.format(r.investedCapital),
  }))]

  return processedInvestmentResults;
}



