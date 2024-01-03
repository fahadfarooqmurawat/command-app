import { cookies } from "next/headers";

export const makeApiRouteCallFromServer = async (method = "GET", body) => {
  const response = await fetch(`${process.env.API_BASE_URL}/api/commands`, {
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