// import { URLS } from '../constants/Urls';
import { request } from './http/Http';

export const FETCH_DATASETS_LIST = 'datasetlist';

export const createUserStory = async (data: any) => {
  return await request(
    // `${URLS.CREATE_USER_STORY}`,
    // 'POST',
    '/json/analytic.json',
    'get',
    data,
    false
  ).then((response: any): any => {
    if (response) {
      return response;
    }
  });
};
