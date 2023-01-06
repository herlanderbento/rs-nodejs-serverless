export async function handler() {
  return {
    statusCode: 201,
    body: JSON.stringify({
      message: 'Hello word Serverless',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}
