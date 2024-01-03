export const makeApiRouteCallFromClient = async (method = "GET", body) => {
  const response = await fetch(`/api/commands`, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();

  return data;
}