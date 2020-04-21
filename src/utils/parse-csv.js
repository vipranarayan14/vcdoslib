import { parse } from 'papaparse';

export const parseCSV = () =>
  new Promise((resolve, reject) => {
    parse(
      'https://docs.google.com/spreadsheets/d/e/' +
        '2PACX-1vQ5qIl3I8n3EKIfsr5rYIhmg8eNffWrKI6zFUDYNDPUENq4KQp5SmnxKQ5OkzbxErTBX3y78r7Y488E/pub?gid=0&single=true&output=csv',
      {
        header: true,
        download: true,
        complete: resolve,
        error: reject
      }
    );
  });

// // This seems slower by 50%

// const restructureData = data =>
//   data.map(row =>
//     Object.entries(row)
//       .filter(([key, value]) => key.startsWith('gsx$'))
//       .map(([key, value]) => ({ [key.replace('gsx$', '')]: value.$t }))
//   );

// export const parseCSV = () =>
//   fetch(
//     'https://spreadsheets.google.com/feeds/list/1nOIw4uUX2IVDVSU_GhqAnKRNC99AXMwK9ZRxxaeO30s/1/public/full?alt=json'
//   )
//     .then(res => res.json())
//     .then(data => restructureData(data.feed.entry));
