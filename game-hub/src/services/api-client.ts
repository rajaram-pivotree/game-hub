import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '1d4d5d503f854d03b508473d3919bb96'
    }
})