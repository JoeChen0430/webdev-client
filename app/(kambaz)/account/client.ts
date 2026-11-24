import axios from "axios";

// 5.4.3.2 — the session lives in a cookie, and axios does not send cookies
// unless you ask. Every signed-in request has to go through this instance or
// Express treats the caller as anonymous.
const axiosWithCredentials = axios.create({ withCredentials: true });

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const USERS_API = `${HTTP_SERVER}/api/users`;

// The shape Express stores in the users collection. It used to be inferred
// from a local users.json; the server owns that data now, so the client
// declares the contract instead of importing the seed.
//
// 6.2.3 — the Mongoose schema marks password `select: false`, so documents
// that come back from find/findOne/findById simply do not carry it. Everything
// below that the schema does not guarantee is optional, because §6.2.6.7
// creates users from a handful of fields and the rest start out missing.
export type User = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  password?: string;
  dob?: string;
  loginId?: string;
  section?: string;
  lastActivity?: string;
  totalActivity?: string;
};

export const ROLES = ["STUDENT", "TA", "FACULTY", "ADMIN", "USER"] as const;

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

// ---------- users administration (6.2.6) ----------
// All of these go through the credentials instance. The book only insists on
// it for findAllUsers, but every one of these is reached from the ADMIN-only
// Users screen, and a request without the cookie comes back 401 rather than
// with data — which is exactly the empty-table symptom §6.2.6.2 warns about.

export const findAllUsers = async () => {
  const response = await axiosWithCredentials.get<User[]>(USERS_API);
  return response.data;
};

// 6.2.6.3 — the predicate rides in the query string. Both filters hit the same
// GET /api/users route; Express picks the DAO based on which key is present.
export const findUsersByRole = async (role: string) => {
  const response = await axiosWithCredentials.get<User[]>(
    `${USERS_API}?role=${encodeURIComponent(role)}`,
  );
  return response.data;
};

export const findUsersByPartialName = async (name: string) => {
  const response = await axiosWithCredentials.get<User[]>(
    `${USERS_API}?name=${encodeURIComponent(name)}`,
  );
  return response.data;
};

// 6.2.6.4 — one document by primary key, for the People Details panel.
export const findUserById = async (userId: string) => {
  const response = await axiosWithCredentials.get<User>(
    `${USERS_API}/${userId}`,
  );
  return response.data;
};

// 6.2.6.7 — the server assigns the uuid, so the caller sends no _id.
export const createUser = async (user: Partial<User>) => {
  const response = await axiosWithCredentials.post<User>(USERS_API, user);
  return response.data;
};

// 6.2.6.5
export const deleteUser = async (userId: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/${userId}`);
  return response.data;
};
