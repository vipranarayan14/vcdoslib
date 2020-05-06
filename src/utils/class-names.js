export const join = (...classNames) =>
  classNames.filter(className => className).join(' ');

export const iffy = (condition, successClass = '', failClass = '') =>
  condition ? successClass : failClass;
