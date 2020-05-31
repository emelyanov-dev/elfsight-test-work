import {getUsers, getAlbumsByUserId, getAlbumPhotos, getAlbumDetails} from "../services";

function showUsers(payload) {
    return {
        type: 'SHOW_USERS',
        payload
    }
}

function showAlbums(payload) {
    return {
        type: 'SHOW_ALBUMS',
        payload
    }
}

export function showAlbum(payload) {
    return {
        type: 'SHOW_ALBUM',
        payload
    }
}

export function selectUser(id) {
    return {
        type: 'SELECT_USER',
        id
    }
}

export function fetchUsers() {
    return (dispatch, getState, api) => {
        getUsers().then(users => dispatch(showUsers(users)))
    };
}


export function fetchAlbumDetails(albumId) {
    return (dispatch) => {
        getAlbumDetails(albumId).then(albumData => {
            dispatch(showAlbum(albumData))
        })
    }
}

export function fetchAlbumsByUser(userId) {
    return (dispatch, getState, api) => {
        dispatch({
            type: 'START_ALBUMS_LOADING'
        });

        getAlbumsByUserId(userId).then(albums => {
            const promises = albums.map((album) => {
                return new Promise((resolve) =>{
                    getAlbumPhotos(album.id).then(photos => {
                        album.photos = photos;
                        album.size = photos.length;
                        album.preview = photos[0].thumbnailUrl;
                        resolve(album)
                    });
                })
            });

            Promise.all(promises).then((albums) => {
                dispatch(showAlbums(albums));
            });
        })
    }
}