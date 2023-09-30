import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_g4A1AJGaGoYFMLLUN2PYsPff0HoXJKyPTH1oGlbdU6YKI607oX0G37ILq3QxjXFq ';

export function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds').then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?&breed_ids=${breedId}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(sad =>
      fetch(`https://api.thecatapi.com/v1/images/${sad[0].id}`).then(
        response => {
          if (!response.ok) {
            throw new Error(response.status);
          }
          return response.json();
        }
      )
    );
}
