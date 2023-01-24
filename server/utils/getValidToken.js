export const getValidToken = (headers) => {
  let token = "";

  if (headers?.authorization) {
    token = headers.authorization.slice(7);
  }

  return token;
};
