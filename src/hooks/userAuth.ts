import { apiClient } from '../api/client.ts';
import { AuthCookie, getHeaders, showError } from '../types/api.ts';
import Cookies from 'js-cookie';
import { SystemUser, UserForm } from '../types/userAuth.ts';

type PostUserResponse = {
  userId: number;
};

export const postUser = async (
  userForm: UserForm
): Promise<PostUserResponse | false> => {
  const { data: responseData, error } = await apiClient.POST('/user/user', {
    headers: getHeaders(),
    body: userForm,
  });
  if (error) {
    showError(error);
    return false;
  }
  return responseData;
};

export const authenticate = async (
  username: string,
  password: string
): Promise<boolean> => {
  const params = {
    username: username,
    password: password,
  };
  const { data: responseData, error } = await apiClient.POST(
    '/user/authenticate',
    {
      headers: getHeaders(),
      body: params,
    }
  );
  if (error) {
    showError(error);
    return false;
  }
  Cookies.set(AuthCookie.AUTH_TOKEN, responseData.authToken);
  Cookies.set(AuthCookie.SYSTEM_USER, JSON.stringify(responseData));
  return true;
};

export const getSystemUser = (): SystemUser | false => {
  const user = Cookies.get(AuthCookie.SYSTEM_USER);
  if (user) {
    return JSON.parse(user);
  }
  return false;
};
