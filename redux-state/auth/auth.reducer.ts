import { loadState } from 'utils/storage';
import { AuthActions, AuthCredentials } from './auth.types';
// import { getStorage } from '../../utils/local-storage';

export const initialState = {
  userId: loadState('userId') ?? '',
  accountId: loadState('accountId') ?? '',
  tokens: {
    access: loadState('accessToken') ?? '',
  },
};

export const authReducer = (state: AuthCredentials, action: AuthActions) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        tokens: {
          access: action.payload.accessToken,
        },
        userId: action.payload.userId,
        accountId: action.payload.accountId,
      };
    case 'SET_AUTH_CREDENTIALS':
      return {
        ...state,
        userId: action.payload.userId,
        accountId: action.payload.accountId,
      };
    case 'LOGOUT':
      window.location.reload();
      return {
        userId: '',
        accountId: '',
        tokens: {
          access: '',
        },
      };
    default:
      return state;
  }
};
