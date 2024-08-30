import axios from 'axios';

export const createClient = () => {
  return axios.create({
    baseURL: 'https://66cbe57d4290b1c4f19b573c.mockapi.io/api/v1',
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
