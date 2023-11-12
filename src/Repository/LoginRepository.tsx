// LoginRepository.ts

import { requestLogin } from '../Remote/LoginRemote';

export const loginRepository = async (username: string, password: string) => {
  return requestLogin(username, password);
};