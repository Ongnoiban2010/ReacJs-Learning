import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/'
})

// Khi gọi hàm này trả về 1 promise
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
}

export default httpRequest;