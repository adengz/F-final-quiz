const HOST = 'http://localhost:8080';
const headers = { 'Content-Type': 'application/json' };

export const fetchTrainers = async () => {
  const response = await fetch(`${HOST}/trainers`, { headers });
  return response.ok ? response.json() : Promise.reject(response);
};

export const fetchTrainees = async () => {
  const response = await fetch(`${HOST}/trainees`, { headers });
  return response.ok ? response.json() : Promise.reject(response);
};

export const fetchGroups = async () => {
  const response = await fetch(`${HOST}/groups`, { headers });
  return response.ok ? response.json() : Promise.reject(response);
};
