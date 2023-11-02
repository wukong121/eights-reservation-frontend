type User = {
  userId: string;
  username: string;
}
interface AuthSlice {
  value: {
    user: User;
    token: string;
  };
}

export {};