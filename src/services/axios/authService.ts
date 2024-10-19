import { useUserStore } from '@features/user/userStore';
import axiosClient from './axiosClient';

export class AuthService {
  static getAccessToken() {
    // Optionally retrieve from cookies or localStorage
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith('accessToken'))
      ?.split('=')[1];
  }

  // static async refreshAccessToken() {
  //   try {
  //     const response = await axiosClient.post('/auth/refresh-token');
  //     return response.data;
  //   } catch (error) {
  //     console.error('Failed to refresh access token:', error);
  //     throw error;
  //   }
  // }

  static async refreshAccessToken() {
    try {
      await axiosClient.post('/auth/refresh-token');
      // No need to return anything since tokens are set in cookies
    } catch (error) {
      console.error('Failed to refresh access token:', error);
      throw error;
    }
  }

  static getRefreshToken() {
    return document.cookie
      .split('; ')
      .find((row) => row.startsWith('refreshToken'))
      ?.split('=')[1];
  }

  static setAccessToken(token: string) {
    document.cookie = `accessToken=${token}; path=/; HttpOnly; SameSite=Strict`;
  }

  static logout() {
    document.cookie = 'accessToken=; Max-Age=0; path=/'; // Clear accessToken
    document.cookie = 'refreshToken=; Max-Age=0; path=/'; // Clear refreshToken

    const { setUser } = useUserStore.getState();
    setUser(null);

    window.location.href = '/';
  }
}
