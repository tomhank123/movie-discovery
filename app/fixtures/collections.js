import movies from './movies';

export const singleCollection = [
  {
    id: 114,
    title: 'Top 10 Movies in Vietnam Today',
    type: 'mostWatched',
    data: [...movies],
  },
];

export default [
  {
    id: 112,
    title: 'Netflix Originals',
    type: 'netflixOriginals',
    data: [...movies],
  },
  {
    id: 113,
    title: 'Popular on Netflix',
    type: 'popularTitles',
    data: [...movies],
  },
  {
    id: 114,
    title: 'Top 10 Movies in Vietnam Today',
    type: 'mostWatched',
    data: [...movies],
  },
];
