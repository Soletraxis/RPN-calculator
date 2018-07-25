import { calculate, checkIfInt } from './CalculatorFunctions'

const calculator = (expression) => {
  const expresstionToArray = expression.split(' ')
  const output = expresstionToArray.map((e) => checkIfInt(e))

  return (calculate(output))
}



export default calculator
