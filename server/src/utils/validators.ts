export const isDataValid = <T>(data: T): boolean =>
  !!(Array.isArray(data) && data.length);

export const isEmptyArray = <T>(data: T): boolean =>
  !!(Array.isArray(data) && !data.length);
