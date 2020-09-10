import callApi from '../index';
import API_BE from '../endPointConfig';

export const getMaterialSettings = () => callApi(
  `${API_BE}/boq_project`,
  'get',
);
