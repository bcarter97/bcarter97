const COOKIES_ACCEPT = 'COOKIES_ACCEPT';
const COOKIES_DECLINE = 'COOKIES_DECLINE';

const acceptObj = {
  type: COOKIES_ACCEPT,
  payload: true,
};

const declineObj = {
  type: COOKIES_DECLINE,
  payload: false,
};

export { COOKIES_ACCEPT, COOKIES_DECLINE, acceptObj, declineObj };
