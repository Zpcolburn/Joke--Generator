const endpoint = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw';

const getAJoke = () => new Promise((resolve, reject) => {
  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Type-Content': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getAJoke;
