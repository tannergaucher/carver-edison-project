export default function rootReducer(state, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.name };

    case "SET_SALARY":
      console.log("state", state);
      return { ...state, salary: action.salary };

    case "SET_CONTRIBUTION":
      console.log("state", state);
      return { ...state, contribution: action.contribution };

    default:
      return state;
  }
}
