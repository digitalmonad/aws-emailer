const __400 = (body) => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 400,
    body: JSON.stringify(body),
  };
};

const __200 = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Origin': '*',
    },
    statusCode: 200,
    body: '',
  };
};

module.exports = {
  __200,
  __400,
};
