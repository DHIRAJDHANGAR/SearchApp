import { getRequest } from "../../Services/Network";

export const getAllProduct = async () => {
  const URL = "https://fakestoreapi.com/products";
  const response = getRequest(URL);
  return response === null ? [] : response;
};
