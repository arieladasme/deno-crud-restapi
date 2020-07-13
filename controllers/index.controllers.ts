import { Response } from "https://deno.land/x/oak/mod.ts";

interface User {
  id: string;
  name: string;
}

const user: User[] = [
  {
    id: "1",
    name: "Desmond",
  },
];

export const getUsers = ({ response }: { response: Response }) => {};
export const getUser = () => {};
export const createUser = () => {};
export const updateUser = () => {};
export const deleteUser = () => {};
