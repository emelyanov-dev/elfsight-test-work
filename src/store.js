import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";

import {albumReducer, albumsListReducer, galleryReducer, usersReducer} from "./reducers";

export default createStore(combineReducers({
  users: usersReducer,
  albums: albumsListReducer,
  album: albumReducer,
  gallery: galleryReducer
}), applyMiddleware(thunk))