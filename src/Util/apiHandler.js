/* eslint-disable import/prefer-default-export */

// Lib imports
import axios from 'axios';

// Constant imports
import { httpVerbs } from 'Constants/index';

export const APIHandler = (path, method, params = {}, formData = false) => {
  const options = {
    'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    method,
    url: path,
    ...(method === httpVerbs.GET ? params && { params }
      : { data: formData ? params : JSON.stringify(params) }),
  };
  return axios(options)
    .then((result) => result)
    .catch((err) => err.response);
};
