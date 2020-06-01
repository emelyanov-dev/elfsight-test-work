import Home from "./pages/Home";
import Album from "./pages/Album";
import UserAlbumsList from "./pages/UserAlbumsList";

export default [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component: UserAlbumsList,
        path: '/users/:userId'
    },
    {
        component: Album,
        path: '/albums/:albumId',
    }
]