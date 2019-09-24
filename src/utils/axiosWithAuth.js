import axios from 'axios';

axios.interceptors.response.use(res => {
  if (res.data.token) {
    localStorage.setItem("token", res.data.token)
  }
  return res
})

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    headers: {
      authorization: token
    }
  });
};