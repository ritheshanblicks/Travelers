/* eslint-disable no-debugger */
import React from 'react';
import { toast } from 'react-toastify';

export const SUCCESS_TOAST = 'success';
export const ERROR_TOAST = 'error';
export const WARNING_TOAST = 'warning';
export const INFO_TOAST = 'info';

const createMarkup = (message: string): any => {
  return { __html: message };
};

const Toast = (message: string, type: string): any => {
  switch (type) {
    case 'success':
      return toast.success(
        <p dangerouslySetInnerHTML={createMarkup(message)}></p>
      );
    case 'info':
      return toast.info(
        <p dangerouslySetInnerHTML={createMarkup(message)}></p>
      );
    case 'error':
      return toast.error(
        <p dangerouslySetInnerHTML={createMarkup(message)}></p>
      );
    case 'warning':
      return toast.warning(
        <p dangerouslySetInnerHTML={createMarkup(message)}></p>
      );
    default:
      return toast.warning(<p>Toast not defined...</p>);
  }
};
export default Toast;
