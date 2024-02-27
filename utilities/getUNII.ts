"use server";

const requestOptions = {
  method: "GET",
};

export const getUNII = async (search: string) => {
  const fetchURL = `${process.env.ENDPOINT_URL}query=${search
    .split(" ")
    .join("+")}&page=1`;

  const response = await fetch(fetchURL, requestOptions,);

  const data = await response.json();
  return data;
};
