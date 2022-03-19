// imports
import axios from 'axios';

/*============================================================*/

// creating axios instance
const createAxiosInstance = (URL) => {
  try {
    return axios.create({
      baseURL: URL,
      timeout: 30000,
    });
  } catch (e) {
    console.log('Error Creating Axios Instance');
  }
};

/*============================================================*/
/*============================================================*/
/*============================================================*/

//get method
const get = async (BASE_URL, API_URL, params) => {
  try {
    let apiResponse = await createAxiosInstance(BASE_URL).get(API_URL, params);
    return apiResponse?.data;
  } catch (error) {
    throw error?.response?.data;
  }
};
/*============================================================*/

//post method
const post = async (BASE_URL, API_URL, PAYLOAD = {}) => {
  const apiCancelToken = axios.CancelToken.source();
  try {
    let apiResponse = await createAxiosInstance(BASE_URL).post(
      API_URL,
      PAYLOAD,
      { cancelToken: apiCancelToken.token }
    );
    return apiResponse?.data;
  } catch (error) {
    throw error?.response?.data;
  }
};
/*============================================================*/

//put method
const put = async (BASE_URL, API_URL, PAYLOAD = {}) => {
  const apiCancelToken = axios.CancelToken.source();
  try {
    let apiResponse = await createAxiosInstance(BASE_URL).put(
      API_URL,
      PAYLOAD,
      { cancelToken: apiCancelToken.token }
    );
    return apiResponse?.data;
  } catch (error) {
    throw error?.response?.data;
  }
};
/*============================================================*/

//delete method
const del = async (BASE_URL, API_URL) => {
  try {
    let apiResponse = await createAxiosInstance(BASE_URL).delete(API_URL);
    return apiResponse?.data;
  } catch (error) {
    throw error?.response?.data;
  }
};
/*============================================================*/

export {
  // put,
  // post,
  // del,
  get,
};
