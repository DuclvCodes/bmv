import axios, {AxiosResponse} from 'axios';

const callApi = async (url: string, method: string, params?: object): Promise<AxiosResponse> => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  };

  const axiosSetup: object = {
    url,
    method,
    headers,
    dataType: 'json',
  };

  return axios(axiosSetup);
}

export default callApi;
