const HOST = 'http://localhost:8080';
const headers = { 'Content-Type': 'application/json' };

export const getUngrouped = async (title) => {
  const response = await fetch(`${HOST}/${title}?grouped=false`, { method: 'GET', headers });
  return response.ok ? response.json() : Promise.reject(response);
};

export const getGroups = async () => {
  const response = await fetch(`${HOST}/groups`, { method: 'GET', headers });
  return response.ok ? response.json() : Promise.reject(response);
};

export const postPerson = async (title, name) => {
  const response = await fetch(`${HOST}/${title}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ name }),
  });
  return response.ok ? response.json() : Promise.reject(response);
};

export const deletePerson = async (title, id) => {
  const response = await fetch(`${HOST}/${title}/${id}`, { method: 'DELETE', headers });
  return response.ok ? response.json() : Promise.reject(response);
};

export const postGroups = async () => {
  const response = await fetch(`${HOST}/groups/auto-grouping`, { method: 'POST', headers });
  return response.ok ? response.json() : Promise.reject(response);
};
