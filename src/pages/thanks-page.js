import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom'

import { calculateExpense, calculateSavings, formatter } from '../utils'

export default function ThanksPage() {
  const name = useSelector((state) => state.name)
  const salary = useSelector((state) => state.salary)
  const contribution = useSelector((state) => state.contribution)

  if (!name) return <Redirect to="/login" />

  return (
    <div className="page container padding">
      <h1>Thank You {name}</h1>
      <div className="card padding">
        <div className="grid container">
          <h4>Your Election</h4>
          <h4>{contribution}%</h4>
          <h4>Your Salary</h4>
          <h4>{formatter.format(salary)}</h4>
          <h4>Your Expense</h4>
          <h4> {calculateExpense(salary, contribution)}</h4>
          <h4>Your Savings</h4>
          <h4>{calculateSavings(salary, contribution)}</h4>
        </div>
      </div>
      <br />
      <Link to="/" className="nav-link">
        <h4>&#8592; Back</h4>
      </Link>
    </div>
  )
}
