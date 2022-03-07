import React, { useCallback } from "react";

interface HasUid {
  uid: string;
}

interface ResponseData extends HasUid {
  first_name: string;
  last_name: string;
  avatar: string;
  employment: {
    title: string;
  };
}

export interface User extends HasUid {
  name: string;
  avatar: string;
  job: string;
}

const API_URL = "https://random-data-api.com/api/users/random_user";

const fetchUserData = async (size: number) => {
  const response = await fetch(`${API_URL}?size=${size}`);

  if (!response.ok) {
    throw new Error("could not fetch users");
  }

  // More time would allow validator function to do some type checking
  return (await response.json()) as Array<ResponseData>;
};

const toUser = (response: ResponseData): User => {
  return {
    uid: response.uid,
    avatar: response.avatar,
    name: `${response.first_name} ${response.last_name}`,
    job: response.employment.title,
  };
};

/** effect hook to fetch user data */
export const useUsers = (number: number): User[] => {
  const [users, setUsers] = React.useState<User[]>([]);

  const updateUsers = useCallback(async (): Promise<void> => {
    const newUsers = (await fetchUserData(number)).map((v) => toUser(v));
    setUsers(newUsers);
  }, [number]);

  // this handles the initial fetch
  React.useEffect(() => {
    updateUsers();
  }, [updateUsers]);

  return users;
};
