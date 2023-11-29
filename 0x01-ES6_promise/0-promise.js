function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const response = { data: 'API data' };
      resolve(response);
    }, 2000);
  });
}
