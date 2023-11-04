export async function simulateLogin(): Promise<Response> {
  // make fake userDate
  const userData = {
    userId: 'xxx',
    userName: 'peter',
  };

  // make fake responseData
  const responseData = {
    data: {
      user: userData,
      token: 'fake-jwt',
    },
  };

  // make fake response object
  const response = new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });

  return Promise.resolve(response);
}