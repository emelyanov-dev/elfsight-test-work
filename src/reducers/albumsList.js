export default function (state = {}, action) {
  switch (action.type) {
    case "START_ALBUMS_LOADING":
      return {
        loading: true
      };
    case 'SHOW_ALBUMS':
      return {albums: action.payload, loading: false, error: false};
    case 'ALBUMS_LOADING_ERROR':
      return {
        error: true,
        loading: false,
      };
    default:
      return state
  }
}