export const LIKE = (like, item) => {
  return {
    type: 'LIKE',
    payload: item,
    like: like,
  };
};
export const DISS_LIKE = (like, item) => {
  return {
    type: 'DISS_LIKE',
    payload: item,
    like: like,
  };
};

export const Virfy = token => {
  return {
    type: 'LOGIN',
    payload: token,
  };
};
