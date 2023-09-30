import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_g4A1AJGaGoYFMLLUN2PYsPff0HoXJKyPTH1oGlbdU6YKI607oX0G37ILq3QxjXFq';

const base_url = 'https://api.thecatapi.com/v1/';
const api_key =
  'live_g4A1AJGaGoYFMLLUN2PYsPff0HoXJKyPTH1oGlbdU6YKI607oX0G37ILq3QxjXFq';
export function fetchBreeds() {
  return fetch(`${base_url}breeds?api_key=${api_key}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${base_url}images/search?breed_ids=${breedId}&api_key=${api_key}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
