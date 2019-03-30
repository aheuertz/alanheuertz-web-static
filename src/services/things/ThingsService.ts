const THINGS_API_ENDPOINT = 'https://a0h896cp57.execute-api.us-east-1.amazonaws.com/Beta/things?key=alright';

export const getThings = () => {
  const accessToken = sessionStorage.getItem('accessToken') || 'NOPE';

  return fetch(THINGS_API_ENDPOINT, {headers: {'Authorization': accessToken}})
    .then((response: Response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }

      throw new Error('Failed to fetch things from ThingsService');
    });
}
