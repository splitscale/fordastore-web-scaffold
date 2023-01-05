import Cookies from 'js-cookie';
import { axiosInstance } from '../apiInteractor/apiInstance';
import { informativeErrorBuilder } from '../errors/builders/InformativeErrorBuilder';
import { InformativeError } from '../errors/InformativeError';
import { User } from '../user/User';
import { UserRequest } from '../user/UserRequest';

export const loginInteractor = async (
  userRequest: UserRequest
): Promise<User | InformativeError> => {
  try {
    const res = await axiosInstance.post('/auth/login');

    const resData: User = res.data as User;

    let authToken = res.headers['authorization'];

    if (authToken) {
      Cookies.set('authorization', authToken);
      Cookies.set('uid', res.data.uid.toString());
      Cookies.set('username', res.data.username.toString());
      Cookies.attributes.sameSite;
    }

    return resData;
  } catch (error: any) {
    return informativeErrorBuilder('Failed to login', error.message);
  }
};
