import axios from 'axios';

const BARS_API_BASE_URL = "http://localhost:8080/bar"


class BarsService {
    getBars(){
        return axios.get(BARS_API_BASE_URL);
    }
}

export default new BarsService()