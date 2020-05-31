export default function (state = {}, action) {
  switch (action.type) {
    case 'SHOW_ALBUM':
      return action.payload;
    default:
      return state
  }
}