import truncate from 'lodash/truncate';

export const getPoster = posterPath =>
  posterPath
    ? `https://www.themoviedb.org/t/p/w470_and_h470_face/${posterPath}`
    : posterPath;
export const getBio = bio =>
  truncate(bio, {
    length: 180,
  }).replace(/\n/g, '<br />');
