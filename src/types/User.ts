export type userRole = 'Basic' | 'Admin';

export interface IUserTokenParsing {
  id: number;
  userId: string;
  userName: string;
  userRole: userRole;
  iat: number;
  exp: number;
}
