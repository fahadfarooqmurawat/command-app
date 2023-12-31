import { cookies } from "next/headers";

export const makeApiRouteCall = async (method = "GET", body) => {
  const response = await fetch(`http://localhost:3000/api/commands`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Cookie: cookies().toString()
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}