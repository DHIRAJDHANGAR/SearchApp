import axios from "axios";

export const getRequest = async (url) => {
  try {
    const response = await axios.get(url);
    const result = response.status === 200 ? response.data : null;
    return result;
  } catch (err) {
    return null;
  }
};

export const postRequest = async (url, payload) => {
  try {
    const response = await axios.post(url, payload);
    const { status, data } = response;
    return status === 200 || status === 201 ? data : null;
  } catch (err) {
    return null;
  }
};
