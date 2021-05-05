async function get<T>(
  url: string,
  params?: Omit<RequestInit, 'method'>
): Promise<T> {
  const response = await fetch(url, params);
  if (!response.ok) {
    throw {
      code: response.status,
      msg: await response.text(),
    };
  }
  return response.json();
}

export const networkService = { get };
