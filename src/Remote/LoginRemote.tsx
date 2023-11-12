// authApi.ts
/*
const baseUrl = 'https://tu-api.com/auth';

export const requestLogin = async (username: string, password: string) => {
  const response = await fetch(`${baseUrl}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error('Error de red o del servidor');
  }

  const data = await response.json();
  return data;
};*/

export const requestLogin = async (username: string, password: string) => {
    // Simulate a delay of 2 seconds
    return new Promise(resolve => setTimeout(() => {
      resolve({
        status: 200,
        json: () => Promise.resolve({ authenticated: true }),
      });
    }, 2000));
};
