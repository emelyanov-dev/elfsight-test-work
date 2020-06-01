export default function (state = {}, action) {
  switch (action.type) {
    case 'START_USERS_LOADING':
      return {
        loading: true
      };
    case 'SHOW_USERS':
      return {users: action.payload, loading: false};
    case 'SELECT_USER':
      return state.users.map((user) => {
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
