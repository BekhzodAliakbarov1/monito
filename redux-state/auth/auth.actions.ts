import { saveState } from 'utils/storage';
import { Login, Logout, Tokens } from './auth.types';

export const login = (data: { userId: string; accountId: string } & Tokens): Login => {
  saveState('accessToken', data.tokens.access);
  saveState('userId', data.userId);
  saveState('accountId', data.accountId);
  return {
    type: 'LOGIN',
    payload: {
      accessToken: data.tokens.access,
      userId: data.userId,
      accountId: data.accountId,
    },
  };
};

export const logout = (): Logout => {
  return {
    type: 'LOGOUT',
  };
};
