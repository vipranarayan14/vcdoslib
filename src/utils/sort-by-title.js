const compareTitle = (a, b) => {
  const articlesRegex = /^(a|an|the)\s+/i;

  const aTitle = a['Title'].replace(articlesRegex, '');
  const bTitle = b['Title'].replace(articlesRegex, '');

  if (aTitle < bTitle) {
    return -1;
  }
  if (aTitle > bTitle) {
    return 1;
  }
  return 0;
};

export const sortByTitle = books => books.sort(compareTitle);
