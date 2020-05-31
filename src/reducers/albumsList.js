export default function (state = [], action) {
  switch (action.type) {
    case 'SHOW_ALBUMS':
      return action.payload;
    default:
      return state
  }
}