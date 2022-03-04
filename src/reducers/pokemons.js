const initialState = {
  list: []
}

export function showPokemon(state = initialState, action) {
  switch (action.type) {
    case "LISTA":
      return Object.assign({}, state, { list: action.payload })
    default:
      return state
  }
}