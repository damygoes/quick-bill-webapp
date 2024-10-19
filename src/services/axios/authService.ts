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

  static async refreshAccessToken(): Promise<void> {
    try {
      const response = await axiosClient.post('/auth/refresh-token', {
        refreshToken: AuthService.getRefreshToken(),
      });
      // Store new access token in cookies
      AuthService.setAccessToken(response.data.accessToken);
    } catch {
      throw new Error('Unable to refresh access token');
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
