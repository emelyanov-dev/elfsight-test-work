export default function (state = [], action) {
  switch (action.type) {
    case 'SHOW_USERS':
      return action.payload;
    case 'SELECT_USER':
      return state.map((user) => {
        user.selected = false;

        if (user.id === action.id) {
          user.selected = true;
          return user
        }
        return user
      });
    default:
      return state;
  }
}
