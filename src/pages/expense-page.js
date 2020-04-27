import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { ExpenseForm } from '../components'

export default function ExpensePage() {
  const { name } = useSelector((state) => state)

  if (!name) return <Redirect to="/login" />

  return (
    <div className="page container padding">
      <h1>Welcome to your monthly budget {name}</h1>
      <ExpenseForm />
    </div>
  )
}
