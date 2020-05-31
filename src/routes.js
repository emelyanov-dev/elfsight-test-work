import Album from "./pages/Album";
import UserAlbumsList from "./pages/UserAlbumsList";

export default [
    {
        component: UserAlbumsList,
        path: '/users/:userId'
    },
    {
        component: Album,
        path: '/albums/:albumId',
    }
]