export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

export const calculateExpense = (salary, contribution) => {
  const percentage = contribution / 100
  const amount = (salary / 12) * percentage
  return formatter.format(parseInt(amount))
}

export const calculateSavings = (salary, contribution) => {
  const percentage = (100 - contribution) / 100
  const amount = (salary / 12) * percentage
  return formatter.format(parseInt(amount))
}
