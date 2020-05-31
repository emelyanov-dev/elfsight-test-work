export default function (state = {photos: [], current: null, showed: false}, action) {
  switch (action.type) {
    case 'NEXT_GALLERY_PHOTO':
      return {
        ...state,
        current:  state.current < state.photos.length ? state.current + 1 : state.current
      };
    case 'PREV_GALLERY_PHOTO':
      return {
        ...state,
        current:  state.current > 0 ? state.current - 1 : state.current
      };
    case 'INIT_GALLERY':
      return action.payload;
    case 'SHOW_GALLERY':
      return {
        ...state,
        showed: true,
        current: state.photos.findIndex(photo => photo.id === action.photoId)
      };
    case 'HIDE_GALLERY':
      return {
        ...state,
        showed: false
      };
    default:
      return state
  }
}