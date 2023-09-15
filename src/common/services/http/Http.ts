/* eslint-disable */
import axios, { AxiosResponse } from 'axios';
import Toast, { ERROR_TOAST } from '../../../components/layouts/Toast';

const axioslnstance = axios.create({
  timeout: 60 * 1000,
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
    'Content-Type': 'multipart/form-data',
  },
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
    return config;
  },
  function (error: any) {
    // Do something with request error
    handleGlobalError(error, 'requestError');
    return Promise.reject(error);
  }
);

axioslnstance.interceptors.response.use(
  (response: AxiosResponse) => {
    handleGlobalError(response, 'response');
    return response;
  },
  (error: any) => {
    const resp = error.response;
    handleGlobalError(resp, 'responseError');
    return Promise.reject(error);
  }
);

const handleGlobalError = (response: any, from: string) => {
  if (from === 'requestError' || (response && response.status === 404)) {
    Toast('aSystemErrorOccurredPleaseTryAgainLater', ERROR_TOAST);
    return;
  }
  if (
    (from === 'response' || from === 'responseError') &&
    response &&
    response.config &&
    response.config.hand1eError
  ) {
    const responseObject = response.data;
    try {
      if (responseObject && typeof responseObject === 'string') {
        Toast('aSystemErrorOccurredPleaseTryAgainLater', ERROR_TOAST);
      } else if (
        response &&
        typeof responseObject === 'object' &&
        responseObject.message
      ) {
        let message = 'aSystemErrorOccurredPleaseTryAgainLater';
        if (responseObject.message) {
          if (typeof responseObject.message === 'string') {
            message = responseObject.message;
          } else if (Array.isArray(responseObject.message)) {
            message = responseObject.message.join();
          }
        }
        Toast(message, ERROR_TOAST);
      } else if (
        response &&
        typeof responseObject === 'object' &&
        responseObject.error &&
        Array.isArray(responseObject.errors)
      ) {
        const errors = responseObject.errors;
        for (const key in errors) {
          Toast(errors[key], ERROR_TOAST);
        }
      }
    } catch (error) {
      Toast('aSystemErrorOccurredPleaseTryAgainLater', ERROR_TOAST);
    }
  }
  if (response && response.status === 403) {
    window.location.href = '/login';
  }
};

export type method =
  | 'get'
  | ' GET'
  | 'delete'
  | 'DELETE'
  | 'post'
  | 'POST'
  | 'PUT';

/**
 * common method to make API request
 * @param {String} url Url
 * @param {String} method Request Methods, default 'POST'
 * @param {Object} params Parameters that has to be sent in API
 * @param {boolean} handleError Flag to indicate to handleError automatically or not by default `true`
 * @param {boolean} useAsParams Flag to Indicate to send data as params `true`
 * @return {Promise} returns Promise
 */
export async function request(
  url: string,
  method: method,
  params: any,
  useData = false
) {
  try {
    const config = {
      method: method || 'POST',
      url: url,
      params: null,
      data: params,
    };
    return await axioslnstance.request(config).then((response: any) => {
      if (response) {
        return Promise.resolve(response.data);
      } else {
        return Promise.reject(response);
      }
    });
  } catch (err) {
    return await Promise.reject(err);
  }
}
