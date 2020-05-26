import http from './httpService';
import config from '../config.json';

const endPoint = config.apiEndpoint + '/movies';

function getMovieUrl(id) {
  return `${endPoint}/${id}`;
}

export function getMovies() {
  return http.get(endPoint);
}

export function deleteMovie(id) {
  return http.delete(getMovieUrl(id));
}

export function getMovie(id) {
  return http.get(getMovieUrl(id));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(getMovieUrl(movie._id), body);
  }

  return http.post(endPoint, movie);
}
