import axios from "axios";
//get products
export const productsApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "apiCallBegan") return next(action);

    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseURL: "http://localhost:5000",
        url,
        method,
        data,
      });

      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };

//get list  of delivery location
export const locationApi =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== "getLocation") return next(action);
    next(action);
    const { url, method, data, onSuccess, onError } = action.payload;
    try {
      const response = await axios.request({
        baseURL: "http://localhost:5000",
        url,
        method,
        data,
      });

      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      dispatch({ type: onError, payload: error });
    }
  };
