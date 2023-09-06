// import packages below
import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://api.spacexdata.com/v4/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const getLaunches = async () => {
  try {
    const request = await AxiosInstance.get('launches');

    return request.data;
  } catch (error) {
    console.log(error);

    return error;
  }
};

export { getLaunches };
