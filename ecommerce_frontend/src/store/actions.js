export const getProducts = () => {
  return {
    type: "apiCallBegan",
    payload: {
      url: "/api/products",
      onSuccess: "products/apiCallSuccessiful",
      onError: "apiCallFailed",
    },
  };
};
