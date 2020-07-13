import { Response, Request, Body } from "https://deno.land/x/oak/mod.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

interface User {
  id: string;
  name: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Desmond",
  },
];

export const getUsers = ({ response }: { response: Response }) => {
  response.body = {
    message: "success",
    users,
  };
};

export const getUser = ({
  params,
  response,
}: {
  params: { id: string };
  response: Response;
}) => {
  const user = users.find((user) => user.id === params.id);

  if (user) {
    response.status = 200;
    response.body = {
      message: "success",
      user,
    };
  } else {
    response.status = 404;
    response.body = {
      message: "User not found",
    };
  }
};

export const createUser = async ({
  request,
  response,
}: {
  request: Request;
  response: Response;
}) => {
  const body: Body = await request.body();

  if (!request.hasBody || !body.value.name) {
    response.status = 404;
    response.body = {
      message: "Body and name is required",
    };
  } else {
    const { id, name } = body.value;

    users.push({
      id: v4.generate(),
      name,
    });

    response.status = 200;
    response.body = {
      message: "User created",
    };
  }
};

export const updateUser = () => {};

export const deleteUser = () => {};
