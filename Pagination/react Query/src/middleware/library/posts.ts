import { User } from "../../interfaces/User";
import { get } from "../requests/requests";

export const getUsersPage = async (pageParam = 1) => {
  const response = await get<User[]>(`/users?page=${pageParam}`);
  const users = response.data;
  return users;
};
