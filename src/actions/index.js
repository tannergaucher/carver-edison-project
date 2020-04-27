// CONSTANTS
export const SET_NAME = 'SET_NAME'
export const SET_SALARY = 'SET_SALARY'
export const SET_CONTRIBUTION = 'SET_CONTRIBUTION'

// ACTION CREATORS
export const setName = (name) => ({ type: SET_NAME, name })
export const setSalary = (salary) => ({ type: SET_SALARY, salary })
export const setContribution = (contribution) => ({
  type: SET_CONTRIBUTION,
  contribution,
})
