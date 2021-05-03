export interface UserSubmit {
  email: string,
  password: string,
  age: number
}

export interface Post {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}
