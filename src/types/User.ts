export type userRole = 'Basic' | 'Admin';

export interface IUser {
  id: number;
  userId: string;
  userName: string;
  userRole: userRole;
  email: string;
  createdAt: string;
}

export interface IUserResponse {
  userList: IUser[];
  totalCount: number;
}

export interface IUserTokenParsing extends Omit<IUser, 'email' | 'createdAt'> {
  iat: number;
  exp: number;
}
