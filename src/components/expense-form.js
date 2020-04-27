import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { setSalary, setContribution } from '../actions'
import { calculateSavings, calculateExpense, formatter } from '../utils'

export default function ExpenseForm() {
  const [salaryFocused, setSalaryFocused] = useState(false)
  const salary = useSelector((state) => state.salary)
  const contribution = useSelector((state) => state.contribution)
  const dispatch = useDispatch()
  const history = useHistory()

  return (
    <form
      className="card padding"
      onSubmit={() => {
        history.push('/thanks')
      }}
    >
      <input
        type="range"
        min="1"
        max="30"
        value={contribution}
        onChange={(e) => dispatch(setContribution(e.target.value))}
        style={{
          margin: `var(--space-lg) var(--space-xl)`,
        }}
      />
      <div className="grid container">
        <h4>Your Salary</h4>
        {salaryFocused ? (
          <input
            type="number"
            className="input"
            value={salary}
            onBlur={() => setSalaryFocused(false)}
            onChange={(e) => dispatch(setSalary(e.target.value))}
            style={{ margin: `0` }}
          />
        ) : (
          <input
            type="text"
            value={formatter.format(salary)}
            onFocus={() => setSalaryFocused(true)}
            readOnly
          />
        )}
        <h4>Your Expense</h4>
        <h4>{calculateExpense(salary, contribution)}</h4>
        <h4>Your Savings</h4>
        <h4>{calculateSavings(salary, contribution)}</h4>
      </div>
      <button
        className="btn btn-primary"
        style={{ margin: `var(--space-md) var(--space-xl)` }}
      >
        Submit
      </button>
    </form>
  )
}
