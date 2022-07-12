import axios from 'axios';
console.log(process.env)

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})

// Khi gọi hàm này trả về 1 promise
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
}

export default httpRequest;