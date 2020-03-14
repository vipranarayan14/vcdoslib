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
