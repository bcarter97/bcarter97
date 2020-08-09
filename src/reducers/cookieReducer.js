import { COOKIES_ACCEPT, COOKIES_DECLINE } from './cookieActions';

const initialState = {
  accept: false,
};

const cookieReducer = (state = initialState, action) => {
  switch (action.type) {
    case COOKIES_ACCEPT:
      return { accept: true };
    case COOKIES_DECLINE:
      return { accept: false };
    default:
      return state;
  }
};

export { cookieReducer };
