export interface Profile {
  username: string;
  bio?: string;
  image?: string;
  following: boolean;
}

export interface User {
  email: string;
  token: string;
  username: string;
  bio?: string;
  image?: string;
}

export interface UserSubmit {
  email: string,
  password: string,
  age: number
}

export interface Post {
  userId?: number;
  id: number;
  title: string;
  body: string;
}

export interface DataPostsList {
  data: {
    userId: number,
    id: number,
    title: string,
    body: string,
  }[];
}
