import { SET_NAME, SET_SALARY, SET_CONTRIBUTION } from '../actions'

export default function rootReducer(state, action) {
  switch (action.type) {
    case SET_NAME:
      return { ...state, name: action.name }

    case SET_SALARY:
      return { ...state, salary: action.salary }

    case SET_CONTRIBUTION:
      return { ...state, contribution: action.contribution }

    default:
      return state
  }
}
