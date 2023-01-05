import { axiosInstance } from '../apiInteractor/apiInstance';
import { informativeErrorBuilder } from '../errors/builders/InformativeErrorBuilder';
import { InformativeError } from '../errors/InformativeError';
import { User } from '../user/User';
import { UserRequest } from '../user/UserRequest';

export const registerInteractor = async (
  userRequest: UserRequest
): Promise<User | InformativeError> => {
  try {
    const response = await axiosInstance.post('/auth/register');

    const resData: User = response.data as User;

    return resData;
  } catch (error: any) {
    return informativeErrorBuilder('Failed to register', error.message);
  }
};
