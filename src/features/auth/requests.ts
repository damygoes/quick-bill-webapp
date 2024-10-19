import { fetchAuthenticatedUser } from '@features/user/requests';
import { ENV_VARIABLES } from '@lib/utils';
import axios from 'axios';
import { LoginPayload } from './types/loginFormPayload';

const baseURL = ENV_VARIABLES.BASE_URL;

export const requestOTP = async (email: string) => {
  try {
    const result = await axios.post(`${baseURL}/auth/request-otp`, { email });
    return result.data;
  } catch (error) {
    console.error('Error requesting OTP', error);
  }
};

export const loginWithOtp = async ({ email, otp }: LoginPayload) => {
  try {
    const response = await axios.post(
      `${baseURL}/auth/login`,
      { email, otp },
      {
        withCredentials: true, // Important: Ensures cookies are sent/received
      }
    );

    if (response.data.status === 200) {
      // Since tokens are in cookies, no need to manually store accessToken.
      // Fetch the authenticated user after successful login
      await fetchAuthenticatedUser();
      return response.data;
    } else {
      console.log('Login failed: ', response.data.message);
      return response.data.message;
    }
  } catch (error) {
    console.error('Error logging in', error);

    if (axios.isAxiosError(error)) {
      console.log('Axios error details: ', error.response);
      if (error.response?.status === 401) {
        return 'Invalid OTP';
      }
    }

    return 'Login error';
  }
};
