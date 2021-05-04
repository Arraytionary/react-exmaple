import axios from "axios";

export default class UserApi {
    static getUser() {
        return axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => data);
    }
}
