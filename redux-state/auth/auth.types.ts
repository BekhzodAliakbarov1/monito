export type UserType = 1 | 3 | 4;

export interface Tokens {
  tokens: {
    access: string;
  };
}

export interface AuthCredentials extends Tokens {
  userId: string;
  accountId: string;
}

export interface AuthContextInterface extends AuthCredentials {
  login: (data: { userId: string; accountId: string } & Tokens) => void;
  logout: () => void;
}

// Auth Action types
export type Login = {
  type: 'LOGIN';
  payload: {
    accessToken: string;
    userId: string;
    accountId: string;
  };
};

export type SetAuthCredentials = {
  type: 'SET_AUTH_CREDENTIALS';
  payload: {
    userId: string;
    accountId: string;
  };
};

export type Logout = {
  type: 'LOGOUT';
};

export type AuthActions = Login | SetAuthCredentials | Logout;
