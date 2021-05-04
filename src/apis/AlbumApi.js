import axios from "axios";

export default class AlbumApi {
    static getAlbum() {
        return axios.get('https://jsonplaceholder.typicode.com/albums').then(({data}) => {
            return data;
        });
    }
}
