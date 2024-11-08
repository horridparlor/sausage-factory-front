export const getStatus = async () => {
  const response = await fetch(
    'https://www.setta.fi/sausage-factory-back/api/user/status',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to report error');
  }

  return response.json();
};
