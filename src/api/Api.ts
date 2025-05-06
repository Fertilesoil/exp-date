import axios from 'axios';

const Api = axios.create({
  baseURL: "https://6756357a11ce847c992c272e.mockapi.io"
});

export default Api;