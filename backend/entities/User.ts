interface User {
  readonly _id?: string;
  email: string;
  password?: string;
  verified: boolean;
}

export default User;
