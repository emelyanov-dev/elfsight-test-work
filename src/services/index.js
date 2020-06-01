function _fetch(path) {
  return fetch(`https://jsonplaceholder.typicode.com/${path}`, {
    mode: 'cors'
  }).then(r => r.json())
}

export function getUsers() {
  return _fetch('users')
}

export function getAlbumsByUserId(userId) {
  return _fetch(`users/${userId}/albums`)
}

export function getAlbumPhotos(id) {
  return _fetch(`albums/${id}/photos`)
}

export async function getAlbumDetails(id) {
  const album = await _fetch(`albums/${id}`);

  album.photos = await getAlbumPhotos(id);
  return album
}
