const fetchValidSession = async () => {
  const res = await fetch('http://localhost:3000/v1/session/validate', {
    method: 'GET',
    credentials: 'include',
  });
  if (!res.ok) throw new Error('Session is not good');
  return await res.json();
};

export { fetchValidSession };
