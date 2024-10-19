export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  isOnboarded: boolean;
  companyIds: string[];
}
