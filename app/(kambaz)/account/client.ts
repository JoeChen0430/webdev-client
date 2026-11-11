import axios from "axios";

// 5.4.3.2 — the session lives in a cookie, and axios does not send cookies
// unless you ask. Every signed-in request has to go through this instance or
// Express treats the caller as anonymous.
const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;

// The shape Express stores in Kambaz/Database/users.json. It used to be
// inferred from the JSON file in this project; the server owns that data now,
// so the client declares the contract instead of importing the seed.
export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
  username: string;
  password: string;
  email: string;
};

export type Credentials = {
  username: string;
  password: string;
};

export const signin = async (credentials: Credentials) => {
  const response = await axiosWithCredentials.post<User>(
    `${USERS_API}/signin`,
    credentials,
  );
  return response.data;
};

export const signup = async (user: Credentials & Partial<User>) => {
  const response = await axiosWithCredentials.post<User>(
    `${USERS_API}/signup`,
    user,
  );
  return response.data;
};

// 5.4.2.4 — asks the server who is signed in. A full page load clears React
// state, but the session cookie survives, so this restores the current user.
export const profile = async () => {
  const response = await axiosWithCredentials.post<User>(`${USERS_API}/profile`);
  return response.data;
};

export const signout = async () => {
  const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
  return response.data;
};

export const updateUser = async (user: User) => {
  const response = await axiosWithCredentials.put<User>(
    `${USERS_API}/${user._id}`,
    user,
  );
  return response.data;
};
