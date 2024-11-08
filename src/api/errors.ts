export const reportTooBrownSausageError = async () => {
  const response = await fetch(
    'https://www.setta.fi/sausage-factory-back/api/user/status',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: 2222,
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to report error');
  }

  return response.json();
};
