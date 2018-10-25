import * as Fuse from 'fuse.js';

const options = {
  distance: 100,
  findAllMatches: true,
  includeScore: true,
  keys: [
    'BookTitle', 'Author', 'AccesionNo', 'RackNo'
  ],
  location: 0,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  shouldSort: true,
  threshold: 0.5
};

export const initFuse = books => new Fuse(books, options);
