import { apiRequest } from "../../index";
import { type User } from "./types";

const API_ENDPOINT = "https://gorest.co.in/public/v2";

export async function getUsers(slug?: string) {
  let url = "/users";
  if (slug) {
    url += slug;
  }
  return await apiRequest<User[]>(API_ENDPOINT + url);
}

export async function editUser(id: string, data: FormData) {
  return await apiRequest<User[]>(API_ENDPOINT + `/users/${id}`, {
    method: "PATCH",
    body: data,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GOREST_TOKEN}`,
    },
  });
}
