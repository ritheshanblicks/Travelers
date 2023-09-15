import { SYSTEM_CONSTANTS } from '.';

const BASE_URL = SYSTEM_CONSTANTS.BASE_URL;
export const URLS = {
  CREATE_USER_STORY: BASE_URL
    ? BASE_URL + '/partner_response'
    : '/partner_response',
};
