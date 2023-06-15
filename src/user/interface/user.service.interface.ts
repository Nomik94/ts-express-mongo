interface IUserService {
  createUser: Promise<IUser>;
  getUser: Promise<IUser[]>;
}
