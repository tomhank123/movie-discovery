import { API_KEY, BASE_URL } from 'utils/constants';

export const createEndpoint = (endpoint, queryParams) => {
  let baseUrl = `${BASE_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`;

  if (queryParams) {
    Object.keys(queryParams).forEach(
      // eslint-disable-next-line no-return-assign
      paramName => (baseUrl += `&${paramName}=${queryParams[paramName]}`),
    );
  }

  return baseUrl;
};
