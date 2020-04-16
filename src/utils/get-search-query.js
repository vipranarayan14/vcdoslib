export const getSearchQuery = queryString => {
  const query = new URLSearchParams(queryString).get('search');

  return query ? decodeURIComponent(query) : '';
};
