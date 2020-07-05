import axios from "axios";

const deezerAPIUrl = "https://api.deezer.com";

const Deezer = {
  artist: (id) => axios.get(`${deezerAPIUrl}/artist/${id}`),
  album: (id) => axios.get(`${deezerAPIUrl}/album/${id}`),
  musicArtistList: (artistId) =>
    axios.get(`${deezerAPIUrl}/artist/${artistId}/top?limit=50`),
  musicAlbumList: (albumId) =>
    axios.get(`${deezerAPIUrl}/album/${albumId}/tracks`),
};

export default Deezer;
