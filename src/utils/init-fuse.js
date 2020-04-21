import * as Fuse from 'fuse.js';

const options = {
  distance: 100,
  useExtendedSearch: true,
  findAllMatches: true,
  includeScore: true,
  keys: [
    {
      name: 'Title',
      weight: 0.5
    },
    {
      name: 'Author',
      weight: 0.4
    },
    {
      name: 'Acc No',
      weight: 0.1
    }
  ],
  location: 0,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  shouldSort: true,
  threshold: 0.5
};

export const initFuse = books => new Fuse(books, options);
