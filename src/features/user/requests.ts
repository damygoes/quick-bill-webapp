import axiosClient from '@services/axios/axiosClient';
import { User } from './types/user';
import { useUserStore } from './userStore';

export const fetchAuthenticatedUser = async () => {
  try {
    const response = await axiosClient.get<User>('/users/self');
    const user = response.data;
    useUserStore.getState().setUser(user);
    return user;
  } catch (error) {
    console.error('Error fetching authenticated user:', error);
  }
};
