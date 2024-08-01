export type userRole = 'Basic' | 'Admin';

export interface IUserTokenParsing {
  userId: string;
  userName: string;
  userRole: userRole;
  iat: number;
  exp: number;
}
