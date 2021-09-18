const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const obj = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, obj)
    .then(response => response.json())
    .then(response =>
      document.getElementById('jokeContainer').innerText = response.joke)
};

window.onload = () => fetchJoke();
