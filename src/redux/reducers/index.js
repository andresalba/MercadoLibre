import initialState from '../initialState'

export default function reducers(state = initialState, action) {
  const { type, payload } = action
  if (type === 'makeSearch') {
    console.log({ payload, state })
    return {
      ...state,
      search: {
        initialized: true,
        results: payload,
      },
    }
  }
  return state
  // action = {type, payload}
}
