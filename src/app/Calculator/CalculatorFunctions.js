const checkIfInt = (signFromInput) => {
  if (!isNaN(parseInt(signFromInput, 10))) {
    return (parseInt(signFromInput, 10))
  }

  return signFromInput
}

const calculate = (output) => {
  let stack = []

  for (let i = 0; i < output.length; ++i) {
    if (isNaN(output[i])) {
      const executeOperation = check(output[i], stack[stack.length - 2], stack[stack.length - 1])

      stack = stack.slice(0, -2)
      stack.push(executeOperation)

    } else {
      stack.push(output[i])
    }
  }
  return stack[0]
}

const check = (sign, first, second) => {
  switch (sign) {
    case '+':
      return (first + second)
    case '-':
      return (first - second)
    case '*':
      return (first * second)
    case '/':
      return (first / second)
    default:
      return (first)
  }
}

module.exports = {
  check,
  calculate,
  checkIfInt
}
