import axios from "axios";

export default class PostApi {
    static getPost() {
        return axios.get('https://jsonplaceholder.typicode.com/posts').then(({data}) => {
            return data;
    });
    }
}
