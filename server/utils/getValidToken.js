export const getValidToken = (headers) => {
  let token = "";

  if (headers?.authorization && headers?.authorization?.length > 7) {
    token = headers.authorization.slice(7);
  }

  return token;
};
