import { ENV_VARIABLES } from '@lib/utils';
import axios, { AxiosError } from 'axios';
import { AuthService } from './authService';

const axiosClient = axios.create({
  baseURL: ENV_VARIABLES.BASE_URL,
  withCredentials: true, // Automatically send cookies with requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Handle token refresh
      const originalRequest = error.config;
      try {
        await AuthService.refreshAccessToken(); // Refresh the token if 401 Unauthorized is returned
        return axiosClient(originalRequest!); // Retry the original request
      } catch (refreshError) {
        AuthService.logout(); // Log out if refreshing the token fails
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
